# Enos CRM Homepage - Project Structure

This document outlines the complete project structure for the Enos CRM Homepage application.

## 🏗️ Project Overview

**Technology Stack:**
- **Framework:** Next.js 15.3.3 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Package Manager:** npm (also supports Bun)
- **Deployment:** Netlify

## 📁 Directory Structure

```
enos-crm-homepage/
├── .next/                      # Next.js build output (auto-generated)
├── .same/                      # Additional project files
│   └── todos.md               # Project todo list
├── node_modules/              # Dependencies (auto-generated)
├── public/                    # Static assets
│   ├── videos/               # Video assets for features
│   │   └── customer-management-demo.mp4  # Demo videos
│   ├── logo.png              # Company logo
│   └── placeholder.png       # Video poster placeholder
├── src/                      # Source code
│   ├── app/                  # Next.js App Router
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout component
│   │   ├── page.tsx          # Homepage component
│   │   └── ClientBody.tsx    # Client-side body wrapper
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── sheet.tsx
│   │   │   └── tabs.tsx
│   │   ├── agentforce.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── scroll-features.tsx
│   │   ├── scroll-features-responsive.tsx  # Main features section
│   │   └── statistics.tsx
│   └── lib/                 # Utility functions
│       └── utils.ts         # Helper utilities
├── .gitignore              # Git ignore rules
├── biome.json              # Biome configuration (linting/formatting)
├── bun.lock                # Bun lockfile
├── components.json         # shadcn/ui configuration
├── eslint.config.mjs       # ESLint configuration
├── netlify.toml           # Netlify deployment config
├── next-env.d.ts          # Next.js TypeScript declarations
├── next.config.js         # Next.js configuration
├── package.json           # npm dependencies and scripts
├── package-lock.json      # npm lockfile
├── postcss.config.mjs     # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.tsbuildinfo   # TypeScript build cache
├── VIDEO_SETUP.md         # Video integration guide
└── PROJECT_STRUCTURE.md   # This file
```

## 🎯 Key Components

### Core Pages
- **`src/app/page.tsx`** - Main homepage with all sections
- **`src/app/layout.tsx`** - Root layout with meta tags

### Feature Components
- **`src/components/hero.tsx`** - Hero section with CTA
- **`src/components/scroll-features-responsive.tsx`** - Interactive video features
- **`src/components/statistics.tsx`** - Stats showcase
- **`src/components/agentforce.tsx`** - Product highlight section
- **`src/components/header.tsx`** - Navigation header
- **`src/components/footer.tsx`** - Site footer

### UI Components
All UI components are from shadcn/ui and located in `src/components/ui/`:
- Buttons, Cards, Dropdown menus, Sheets, Tabs

## 🎬 Video Integration

Videos are stored in `public/videos/` and automatically loaded by the features component:

**Expected video files:**
- `customer-management-demo.mp4`
- `team-collaboration-demo.mp4`
- `pipeline-tracking-demo.mp4`
- `performance-reports-demo.mp4`

See `VIDEO_SETUP.md` for detailed video integration guide.

## ⚙️ Configuration Files

### Development & Build
- **`package.json`** - Scripts: `npm run dev`, `npm run build`, `npm start`
- **`next.config.js`** - Next.js config with image optimization
- **`tsconfig.json`** - TypeScript compiler options
- **`tailwind.config.ts`** - Tailwind CSS customization

### Code Quality
- **`eslint.config.mjs`** - ESLint rules for code quality
- **`biome.json`** - Biome formatter/linter configuration

### Deployment
- **`netlify.toml`** - Netlify build settings and redirects

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📂 Asset Management

### Images
- **Logo**: `public/logo.png` - Company branding
- **Placeholders**: `public/placeholder.png` - Video posters

### Videos
- **Location**: `public/videos/`
- **Format**: MP4 (H.264 codec recommended)
- **Size**: Keep under 10MB for optimal performance

## 🔧 Architecture Notes

### Next.js App Router
- Uses the new App Router (not Pages Router)
- Server and client components are properly separated
- TypeScript enabled throughout

### Styling Strategy
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for consistent component library
- **Custom CSS** in `globals.css` for animations

### Component Organization
- **Responsive design** built-in for all components
- **Interactive features** with proper state management
- **Video controls** with play/pause functionality

## 🐛 Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next`
- Check TypeScript errors: `npm run build`

### Video Issues
- Verify video files are in `public/videos/`
- Check file names match exactly (case-sensitive)
- Ensure MP4 format with H.264 codec

### Development Issues
- Restart dev server: Stop with Ctrl+C, run `npm run dev`
- Check port 3000 availability
- Verify all environment variables are set

## 📝 File Naming Conventions

- **Components**: PascalCase (e.g., `ScrollFeatures.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Assets**: kebab-case (e.g., `customer-management-demo.mp4`)
- **Config files**: As per framework conventions

## 🔗 Dependencies Overview

### Core Framework
- `next` - React framework
- `react` & `react-dom` - React library
- `typescript` - Type safety

### UI & Styling
- `tailwindcss` - CSS framework
- `@radix-ui/*` - Accessible UI primitives
- `lucide-react` - Icon library
- `class-variance-authority` - Component variants

### Development Tools
- `eslint` - Code linting
- `@biomejs/biome` - Formatting and linting
- `postcss` - CSS processing

This structure ensures a maintainable, scalable, and well-organized codebase for the Enos CRM Homepage. 