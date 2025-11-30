
import { Project, ExperienceItem, SkillItem, BlogPost, NavLink, SocialLinks } from './types';
import OptimizingNextJs from './posts/OptimizingNextJs';
import ReactNativeCicd from './posts/ReactNativeCicd';
import HeadlessCms from './posts/HeadlessCms';

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/konyan',
  linkedin: 'https://linkedin.com/in/nyanlintun',
  email: 'mailto:devkonyan@gmail.com',
  phone: 'tel:+66946010252'
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },
];

export const SKILLS: SkillItem[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'React Native', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'Azure DevOps', category: 'Tools' },
  { name: 'Jenkins', category: 'Tools' },
  { name: 'Nx Monorepo', category: 'Tools' },
  { name: 'Jest/Cypress', category: 'Tools' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    company: 'AutoMate',
    role: 'Senior Frontend Developer',
    period: 'July 2023 - May 2025',
    location: 'Hong Kong SAR (Remote)',
    description: 'Architecting high-performance e-commerce solutions and managing frontend teams.',
    technologies: ['Next.js', 'React', 'Stripe', 'Headless CMS', 'Tailwind'],
    achievements: [
      'Strengthened expertise in headless architectures, JavaScript frameworks, and delivering data-driven results.',
      'Architected and implemented a new Next.js and React-based frontend for a high-traffic e-commerce platform in the automotive industry, resulting in a 35% increase in page load speed and a 20% increase in conversion rates.',
      'Developed a responsive, mobile-first web application for a major client, leading to a 50% increase in mobile traffic and a 30% increase in overall user engagement.',
      'Managed a team of 4 frontend developers, successfully delivering 3+ major projects and 10+ minor projects on time and under budget.',
      'Developed prototypes, user interface designs, and wireframes for the car insurance website of a leading Hong Kong insurance company.',
      'Led the integration of customer service chat functionality to answer user questions and schedule consultations, resulting in a 15% increase in leads.',
      'Integrated Stripe payment gateway into the e-commerce platform, including robust error handling.',
      'Implemented Microsoft Clarity to analyze user behavior and identify areas for user experience improvement.'
    ]
  },
  {
    id: '2',
    company: 'Seven Peaks',
    role: 'Web Developer (React & React Native)',
    period: 'Dec 2021 - July 2023',
    location: 'Bangkok, Thailand',
    description: 'Spearheaded mobile app development and modernized legacy web platforms.',
    technologies: ['React Native', 'Expo', 'Azure CI/CD', 'GraphQL', 'Strapi'],
    achievements: [
      'Spearheaded the development and implementation of key mobile application features using Firebase technologies, including push notifications and deep linking, resulting in a 25% increase in user adoption.',
      'Designed and developed intuitive user interfaces for the social e-commerce app, Bandit, using Expo.',
      'Streamlined the development process by establishing an Azure Pipelines CI/CD workflow, automating app builds and deployments to Expo servers and app stores.',
      'Led the transformation of an outdated WordPress website into a modern platform using React with Strapi Headless CMS and GraphQL, resulting in a 20% increase in engagement.',
      'Led the development team for a new cross-platform mobile application using Expo React Native, integrating B2C Azure Authentication.',
      'Mentored developers and promoted software development best practices, including Jest testing and SonarCloud.',
      'Established a Redux architecture with React-Navigation for mobile navigation.'
    ]
  },
  {
    id: '3',
    company: 'AYA Bank',
    role: 'Front-End Team Lead',
    period: 'Aug 2020 - Oct 2021',
    location: 'Yangon, Myanmar',
    description: 'Led engineering teams in developing critical internal banking systems.',
    technologies: ['React Native', 'Redux', 'Jenkins', 'GitLab', 'REST API'],
    achievements: [
      'Crafted dynamic and engaging React Native components, utilizing component-based architecture for excellent functionality.',
      'Leveraged React Native libraries (React Navigation, Redux, Axios) for seamless page transitions and efficient state management.',
      'Led a team of 5 engineers in developing an internal appointment management system for COVID-19 outbreak and vaccination tracking.',
      'Architected innovative micro-services and Web Services (REST) with React and Redux for large-scale applications.',
      'Supported the Core Banking team by engineering and testing processes, handling debugging and troubleshooting.',
      'Developed comprehensive unit tests and automation scripts for front-end and back-end technologies.',
      'Implemented process optimizations integrating Jenkins and GitLab for a 40% reduction in development cycle time.'
    ]
  },
  {
    id: '4',
    company: 'Nexidea',
    role: 'Senior Software Engineer',
    period: 'Aug 2019 - Sep 2020',
    location: 'Yangon, Myanmar',
    description: 'Developed backend services for a luggage storage platform tailored for tourists in Japan.',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'JUnit', 'Mockito'],
    achievements: [
      'Played a key role in the development of a luggage storage platform tailored for tourists in Japan.',
      'Led and mentored a team of software engineers and developers, fostering a collaborative environment.',
      'Designed, developed, and maintained robust RESTful web services using Spring Boot and Hibernate.',
      'Optimized data access and manipulation for high-volume transactions related to luggage storage reservations.',
      'Collaborated closely with a Japanese project manager and lead developer.',
      'Demonstrated proficiency in setting up and testing local payment platforms and managing multi-transaction processes.',
      'Conducted thorough code analysis using test automation tools (JUnit, Mockito).'
    ]
  },
  {
    id: '5',
    company: 'COMQUAS',
    role: 'Software Engineer',
    period: 'Apr 2018 - July 2019',
    location: 'Yangon, Myanmar',
    description: 'Delivered video streaming and hotel booking projects with complex payment integrations.',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'Payment Gateways', 'Figma'],
    achievements: [
      'Led PHP/Laravel and JavaScript development, utilizing FIGMA for UI/UX design and RESTful API documentation.',
      'Successfully delivered Mahar Video Streaming project on time and integrated Mobile Payment flow with Local Operators.',
      'Spearheaded Lodggy Hotel Booking projects, managing costs, schedules, and communication with Product Owner.',
      'Collaborated with stakeholders to develop ABC Payment Application and dynamic service rendering system.',
      'Implemented dynamic RESTful API to manage App UI from the server side.',
      'Introduced and integrated third-party payment systems like 2C2P, MPU, and Stripe International payment.'
    ]
  },
  {
    id: '6',
    company: 'GoP Tour Platform',
    role: 'Frontend Engineer',
    period: 'May 2014 - Mar 2018',
    location: 'Yangon, Myanmar',
    description: 'Developed web-based travel solutions and optimized site performance.',
    technologies: ['Angular', 'jQuery', 'HTML/CSS', 'SEO', 'Mobile Opt'],
    achievements: [
      'Collaborated within a multidisciplinary team to develop web-based Travel & Tour solutions, utilizing Angular, HTML/CSS3, jQuery, and JavaScript.',
      'Conducted user research and usability testing to inform design decisions.',
      'Translated conceptual ideas into design mockups and interactive prototypes.',
      'Developed multilingual support for the platform (Burmese and English).',
      'Developed user-friendly visuals and features using front-end technologies, leading to improved site traffic.',
      'Strategized and implemented SEO techniques achieving prominent search engine rankings.',
      'Developed and maintained high-performance, reusable Java code for Android apps with offline capabilities.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'AutoMate Platform',
    category: 'E-Commerce',
    description: 'High-performance automotive e-commerce solution.',
    longDescription: 'A modern, headless e-commerce platform built for the automotive industry. It features a Next.js frontend coupled with a robust backend, delivering 35% faster page loads and 20% higher conversion rates. Key integrations include Stripe for payments and real-time customer support chat.',
    tags: ['Next.js', 'React', 'Headless CMS', 'Stripe', 'Performance'],
    image: 'https://picsum.photos/800/600?random=1',
    link: '#'
  },
  {
    id: 'p2',
    title: 'Bandit App',
    category: 'Mobile / Social',
    description: 'Social e-commerce application built with Expo.',
    longDescription: 'A social commerce mobile application developed using React Native and Expo. Features include intuitive user interfaces, deep linking, push notifications, and seamless B2C Azure Authentication. The project emphasized rapid development cycles via Azure CI/CD.',
    tags: ['React Native', 'Expo', 'Firebase', 'Azure', 'Mobile'],
    image: 'https://picsum.photos/800/600?random=2',
    link: '#'
  },
  {
    id: 'p3',
    title: 'MMFontsHub',
    category: 'Open Source',
    description: 'Digital platform for the Myanmar fonts community.',
    longDescription: 'A volunteer project dedicated to preserving Myanmar\'s linguistic heritage. Built with Next.js, this platform optimizes SEO and performance to ensure broad access to Myanmar fonts for users worldwide, fostering digital inclusion.',
    tags: ['Next.js', 'SEO', 'Open Source', 'Community'],
    image: 'https://picsum.photos/800/600?random=3',
    link: 'https://www.mmfontshub.app/'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  { 
    id: 'b1', 
    title: 'Optimizing Next.js for High Traffic E-commerce', 
    date: 'Nov 15, 2023',
    readTime: '5 min read',
    excerpt: 'Learn how to leverage Static Site Generation (SSG) and Incremental Static Regeneration (ISR) to handle millions of requests.',
    component: OptimizingNextJs
  },
  { 
    id: 'b2', 
    title: 'React Native with Expo: CI/CD Best Practices', 
    date: 'Oct 02, 2023',
    readTime: '6 min read',
    excerpt: 'A deep dive into automating your React Native deployment pipeline using Azure DevOps and EAS.',
    component: ReactNativeCicd
  },
  { 
    id: 'b3', 
    title: 'Migrating Legacy CMS to Headless Architecture', 
    date: 'Sep 10, 2023', 
    readTime: '4 min read',
    excerpt: 'How we decoupled the frontend from WordPress to improve performance and flexibility using Strapi.',
    component: HeadlessCms
  }
];