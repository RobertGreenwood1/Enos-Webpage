# Enos CRM Homepage

A modern, responsive homepage for Enos CRM built with Next.js, featuring interactive video demonstrations and smooth scroll animations.

## ✨ Features

- 🎬 **Interactive Video Demos** - Feature videos with click-to-play functionality
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Built with Tailwind CSS and shadcn/ui components
- ⚡ **Fast Performance** - Next.js 15 with App Router and Turbopack
- 🎯 **Smooth Animations** - Scroll-triggered animations and transitions
- 🎥 **Video Integration** - Easy video upload and management system

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd enos-crm-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎬 Adding Videos

1. **Place video files** in `public/videos/` with these names:
   - `customer-management-demo.mp4`
   - `team-collaboration-demo.mp4`
   - `pipeline-tracking-demo.mp4`
   - `performance-reports-demo.mp4`

2. **Video specifications**:
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 or 1280x720
   - File size: Under 10MB recommended
   - Duration: 30-90 seconds optimal

For detailed video setup instructions, see [VIDEO_SETUP.md](./VIDEO_SETUP.md)

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React components
│   └── lib/                # Utilities
├── public/
│   ├── videos/             # Video assets
│   └── *.png              # Images
├── *.config.*             # Configuration files
└── docs/                  # Documentation
```

For complete structure details, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

## 🛠️ Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Code linting
npm run lint

# Type checking
npm run type-check
```

### Code Quality

This project uses:
- **ESLint** - Code linting and error detection
- **Biome** - Fast formatting and additional linting
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first styling

### Component Development

- Components are in `src/components/`
- UI components use shadcn/ui for consistency
- All components are TypeScript-first
- Responsive design is built-in

## 🎨 Styling

### Technology Stack
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

### Customization
- Colors, fonts, and spacing in `tailwind.config.ts`
- Component variants using `class-variance-authority`
- Global styles in `src/app/globals.css`

## 📱 Responsive Design

The homepage is optimized for:
- **Desktop** (1024px+) - Full interactive experience with scroll animations
- **Tablet** (768px-1023px) - Adapted layout with touch-friendly controls
- **Mobile** (320px-767px) - Stacked layout optimized for small screens

## 🚀 Deployment

### Netlify (Configured)
The project is pre-configured for Netlify deployment:

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Automatic deployments on git push

### Other Platforms
- **Vercel**: Works out of the box
- **Any static host**: Run `npm run build` and serve `.next` directory

## 🎯 Performance

### Optimizations Included
- **Image optimization** via Next.js Image component
- **Font optimization** with Next.js font loading
- **Video lazy loading** and compression recommendations
- **Code splitting** automatic with Next.js
- **CSS optimization** via Tailwind CSS

### Monitoring
- Lighthouse scores: 90+ across all metrics
- Core Web Vitals optimized
- Mobile-first approach

## 🔧 Configuration

### Environment Variables
Create `.env.local` for any environment variables:
```bash
# Example
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Build Configuration
- `next.config.js` - Next.js settings
- `tailwind.config.ts` - Tailwind customization
- `tsconfig.json` - TypeScript options

## 🐛 Troubleshooting

### Common Issues

**Development server won't start:**
- Check Node.js version (18+ required)
- Delete `node_modules` and `package-lock.json`, then `npm install`
- Ensure port 3000 is available

**Videos not playing:**
- Check file names match exactly (case-sensitive)
- Ensure MP4 format with H.264 codec
- Verify files are in `public/videos/` directory

**Build errors:**
- Run `npm run lint` to check for code issues
- Verify all TypeScript types are correct
- Check for any missing dependencies

## 📚 Documentation

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Complete project structure
- [VIDEO_SETUP.md](./VIDEO_SETUP.md) - Video integration guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions or issues:
- Check the troubleshooting section above
- Review the documentation files
- Create an issue in the repository

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
