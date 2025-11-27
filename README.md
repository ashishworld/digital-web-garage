# Digital Web Garage

A modern, responsive website for Digital Web Garage - an IT solutions company offering web development, mobile apps, SEO, digital marketing, and cloud hosting services.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Optimized for Vercel deployment
- 📱 Mobile-first approach
- 🚀 Fast performance
- ♿ Accessible components

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with Navbar and Footer
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Footer.tsx       # Footer component
│   ├── HeroSection.tsx  # Hero section
│   ├── StatsSection.tsx # Statistics section
│   ├── AboutSection.tsx # About us section
│   ├── ServicesSection.tsx # Services section
│   ├── TestimonialsSection.tsx # Testimonials
│   └── QuoteSection.tsx # Quote request form
└── public/              # Static assets
```

## Customization

- Update company information in `components/Footer.tsx`
- Modify services in `components/ServicesSection.tsx`
- Change colors in `tailwind.config.ts`
- Update metadata in `app/layout.tsx`

## License

© Digital Web Garage. All Rights Reserved.

