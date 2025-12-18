# Pixel Perfect Designs - GCF Gifts E-commerce Platform

A modern, responsive e-commerce platform for personalized gifts built with React, TypeScript, and Tailwind CSS.

## Features

- 🛍️ **E-commerce Functionality**: Complete shopping cart, checkout, and order management
- 🎨 **Personalized Gifts**: Custom photo frames, mugs, and personalized items
- 🚚 **Multiple Delivery Options**: Standard, Express, and Same-day delivery
- 📱 **Responsive Design**: Mobile-first approach with modern UI components
- 🔐 **Admin Dashboard**: Comprehensive admin panel for order and inventory management
- 📊 **Analytics**: Sales tracking and customer insights
- 🎯 **SEO Optimized**: Meta tags and structured content for search engines

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: React Context API
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd pixel-perfect-designs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── admin/          # Admin dashboard components
│   ├── home/           # Homepage sections
│   ├── layout/         # Header, Footer components
│   ├── products/       # Product-related components
│   └── ui/             # shadcn/ui components
├── contexts/           # React Context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── types/              # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Admin Access

Demo admin credentials:
- Email: admin@gcfgifts.com
- Password: admin123

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to GCF Gifts.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

### Netlify
1. Connect your GitHub repository to [Netlify](https://netlify.com)
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Custom Server
1. Build the project: `npm run build`
2. Serve the `dist` folder using any static hosting service
3. Configure your web server to handle client-side routing

### Custom Domain Setup
- **Vercel**: Add your domain in Project Settings > Domains
- **Netlify**: Configure custom domain in Site Settings > Domain Management
- **Other platforms**: Follow your hosting provider's documentation for custom domain configuration
