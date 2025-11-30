import React from 'react';

const HeadlessCms: React.FC = () => {
  return (
    <>
      <h1>Going Headless: WordPress to Strapi</h1>
      <p>
        Legacy monolithic CMS platforms can become a bottleneck for performance and design flexibility. We migrated a client's site from a traditional WordPress setup to a <strong>Headless architecture</strong> using React and Strapi.
      </p>

      <h2>Why Headless?</h2>
      <ul>
        <li><strong>Performance</strong>: React allows for client-side routing and faster interactions.</li>
        <li><strong>Security</strong>: The backend is decoupled from the display layer.</li>
        <li><strong>Omnichannel</strong>: Content stored in Strapi can be consumed by the web, mobile apps, and smartwatches.</li>
      </ul>

      <h2>The Stack</h2>
      <ul>
        <li><strong>Frontend</strong>: Next.js (hosted on Vercel)</li>
        <li><strong>Backend</strong>: Strapi (hosted on AWS EC2)</li>
        <li><strong>Database</strong>: PostgreSQL</li>
      </ul>

      <h2>The Challenge: SEO</h2>
      <p>
        One concern with Single Page Applications (SPAs) is SEO. We solved this by using Next.js <strong>Server Side Rendering (SSR)</strong> for key landing pages, ensuring search engines could crawl our content effectively.
      </p>
      <p>
        The result was a <strong>20% increase in user engagement</strong> due to the snappier interface.
      </p>
    </>
  );
};

export default HeadlessCms;