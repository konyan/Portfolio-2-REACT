# Konyan Portfolio 🚀

> A modern, high-performance portfolio website showcasing my journey as a Senior Full Stack Engineer.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://konyan.github.io/konyan.dev/)
[![Built with React](https://img.shields.io/badge/React-19.2.0-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6?logo=typescript)](https://www.typescriptlang.org/)

## ✨ Features

- 🎨 **Modern UI/UX** - Minimalist design with electric purple accents
- 🌗 **Dark Mode** - Smooth theme switching with system preference detection
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 📱 **Fully Responsive** - Mobile-first approach, works on all devices
- 🎭 **Smooth Animations** - Framer Motion for buttery-smooth interactions
- 🎯 **Custom Cursor** - Interactive code-style cursor on desktop
- 🔍 **SEO Optimized** - Complete meta tags, Open Graph, and structured data
- 📝 **Blog System** - Built-in blog with markdown-style content
- 🚀 **CI/CD Ready** - Automated deployment to GitHub Pages

## 🛠️ Tech Stack

### Frontend
- **React 19.2** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS (via CDN)
- **Lucide React** - Icon library

### Tools & Deployment
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD pipeline
- **gh-pages** - Deployment automation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/konyan/konyan.dev.git
cd konyan.dev

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

## 📁 Project Structure

```
.
├── components/          # React components
│   ├── Blog.tsx        # Blog listing section
│   ├── CursorGlow.tsx  # Cursor glow effect
│   ├── CustomCursor.tsx # Custom cursor
│   ├── Experience.tsx  # Work experience section
│   ├── Footer.tsx      # Site footer
│   ├── GithubStats.tsx # GitHub statistics
│   ├── Hero.tsx        # Hero/landing section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   ├── SEO.tsx         # SEO meta tags manager
│   ├── Skills.tsx      # Skills section
│   └── StructuredData.tsx # JSON-LD structured data
├── hooks/              # Custom React hooks
│   └── useTypewriter.tsx # Typewriter effect hook
├── pages/              # Page components
│   ├── BlogPostPage.tsx # Individual blog post
│   ├── BlogsPage.tsx   # Blog listing page
│   └── Home.tsx        # Homepage
├── posts/              # Blog post content
│   ├── HeadlessCms.tsx
│   ├── OptimizingNextJs.tsx
│   └── ReactNativeCicd.tsx
├── public/             # Static assets
│   ├── robots.txt      # Search engine rules
│   ├── sitemap.xml     # Site structure
│   └── og-image.svg    # Social media preview
├── App.tsx             # Main app component
├── constants.tsx       # App constants & data
├── index.html          # HTML template
├── index.tsx           # App entry point
├── types.ts            # TypeScript types
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## 🎨 Customization

### Update Personal Information

Edit [`constants.tsx`](./constants.tsx) to update:
- Social links
- Skills
- Work experience
- Projects
- Blog posts

```typescript
export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  email: 'mailto:your@email.com',
  phone: 'tel:+1234567890'
};
```

### Add New Blog Posts

1. Create a new component in [`posts/`](./posts/)
2. Add it to `BLOG_POSTS` in [`constants.tsx`](./constants.tsx)
3. Update [`sitemap.xml`](./public/sitemap.xml)

### Customize Theme Colors

Colors are defined in [`index.html`](./index.html) using Tailwind config:

```javascript
colors: {
  accent: {
    DEFAULT: '#8b5cf6', // Your accent color
    glow: 'rgba(139, 92, 246, 0.5)',
  }
}
```

## 🔍 SEO Features

This portfolio includes comprehensive SEO optimizations:

- ✅ Dynamic meta tags per page
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data (Person, Website, Article)
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Semantic HTML5
- ✅ Mobile-first responsive design

See [SEO_GUIDE.md](./SEO_GUIDE.md) for detailed documentation.

## 🚀 Deployment

### GitHub Pages (Automated)

The project uses GitHub Actions for automatic deployment:

1. Push to `main` branch
2. GitHub Actions builds the project
3. Automatically deploys to GitHub Pages

Your site will be live at: `https://[username].github.io/konyan.dev/`

### Manual Deployment

```bash
npm run deploy
```

### Configuration

Ensure [`vite.config.ts`](./vite.config.ts) has the correct base path:

```typescript
base: process.env.NODE_ENV === 'production' ? '/konyan.dev/' : '/'
```

## 📊 Performance

- ⚡ **Fast Load Times** - Optimized with Vite
- 📦 **Small Bundle Size** - Code splitting & tree shaking
- 🎯 **Lazy Loading** - Images and components load on demand
- 🔄 **Hot Module Replacement** - Instant updates during development

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Konyan (Nyan Lin Tun)**

- 💼 LinkedIn: [@nyanlintun](https://linkedin.com/in/nyanlintun)
- 🐙 GitHub: [@konyan](https://github.com/konyan)
- 📧 Email: devkonyan@gmail.com
- 📱 Phone: +66946010252

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)

---

<div align="center">
  <p>⭐ Star this repo if you found it helpful!</p>
  <p>Made with ❤️ by Konyan</p>
</div>
