import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Loader2, AlertCircle } from 'lucide-react';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ApiResponse {
  total: {
    [year: string]: number;
  };
  contributions: ContributionDay[];
}

const GithubStats: React.FC = () => {
  const [data, setData] = useState<ContributionDay[][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalContributions, setTotalContributions] = useState(0);

  // Extract username from URL (e.g., https://github.com/konyan -> konyan)
  const username = SOCIAL_LINKS.github.split('/').pop() || 'konyan';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (!response.ok) throw new Error('Failed to fetch');
        
        const json: ApiResponse = await response.json();
        
        // The API returns a flat array of days. We need to group them into weeks (columns).
        // Github graph is usually 7 rows (Sun-Sat).
        const days = json.contributions;
        const weeks: ContributionDay[][] = [];
        let currentWeek: ContributionDay[] = [];

        // Calculate total for the "last year" view
        const total = days.reduce((acc, day) => acc + day.count, 0);
        setTotalContributions(total);

        // Group by weeks
        // Ensure we start aligning correctly if the first day isn't Sunday, 
        // but this API typically returns a full year grid or we can just chunk by 7.
        // For a perfect graph, we usually just chunk by 7.
        days.forEach((day) => {
          currentWeek.push(day);
          if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
          }
        });
        
        // Push remaining days if any
        if (currentWeek.length > 0) {
          weeks.push(currentWeek);
        }

        // We only want the last 52 weeks to fit nicely
        const last52Weeks = weeks.slice(-52);
        setData(last52Weeks);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  const getColor = (level: number) => {
    switch(level) {
      case 4: return 'bg-accent';
      case 3: return 'bg-accent/80';
      case 2: return 'bg-accent/50';
      case 1: return 'bg-neutral-300 dark:bg-neutral-800';
      default: return 'bg-neutral-200 dark:bg-neutral-900';
    }
  };

  return (
    <section className="py-24 bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center justify-center gap-2">
                Github Activity
            </h2>
            <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-neutral-500 hover:text-accent transition-colors font-mono mt-2 inline-block"
            >
                @{username} {totalContributions > 0 && `• ${totalContributions} contributions in the last year`}
            </a>
        </div>
        
        {loading ? (
            <div className="h-32 flex items-center justify-center">
                <Loader2 className="animate-spin text-accent" size={32} />
            </div>
        ) : error ? (
            <div className="h-32 flex flex-col items-center justify-center text-neutral-500">
                <AlertCircle size={32} className="mb-2" />
                <p>Could not load contributions.</p>
            </div>
        ) : (
            <>
                <div className="overflow-x-auto max-w-full pb-4 scrollbar-hide">
                <div className="flex gap-[3px]">
                    {data.map((week, wIndex) => (
                    <div key={wIndex} className="flex flex-col gap-[3px]">
                        {week.map((day, dIndex) => (
                        <motion.div
                            key={`${wIndex}-${dIndex}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: wIndex * 0.005 }}
                            className={`w-3 h-3 rounded-[1px] ${getColor(day.level)}`}
                            whileHover={{ scale: 1.5, zIndex: 10, borderRadius: '2px' }}
                            title={`${day.date}: ${day.count} contributions`}
                        />
                        ))}
                    </div>
                    ))}
                </div>
                </div>
                
                <div className="flex items-center gap-2 mt-4 text-xs text-neutral-500 font-mono">
                <span>Less</span>
                <div className="w-3 h-3 bg-neutral-200 dark:bg-neutral-900 rounded-[1px]" />
                <div className="w-3 h-3 bg-neutral-300 dark:bg-neutral-800 rounded-[1px]" />
                <div className="w-3 h-3 bg-accent/50 rounded-[1px]" />
                <div className="w-3 h-3 bg-accent/80 rounded-[1px]" />
                <div className="w-3 h-3 bg-accent rounded-[1px]" />
                <span>More</span>
                </div>
            </>
        )}
      </div>
    </section>
  );
};

export default GithubStats;