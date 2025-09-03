# Shadcn Admin - Next.js Edition

A modern admin dashboard UI built with **Next.js 15**, **ShadcnUI**, and **Tailwind CSS**. This is a Next.js port of the original [shadcn-admin](https://github.com/satnaing/shadcn-admin) project, featuring enhanced performance, App Router, and the latest React patterns.

![Shadcn Admin Dashboard](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js) ![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=for-the-badge&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178c6?style=for-the-badge&logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🚀 **Next.js 15** with App Router and Turbopack
- 🎨 **ShadcnUI** components with custom modifications
- 🌙 **Light/Dark mode** with system preference detection
- 📱 **Fully responsive** design for all devices
- ♿ **Accessibility** first approach with ARIA labels
- 🔍 **Global search** with command palette (⌘K)
- 📊 **Dashboard analytics** with Recharts integration
- 💬 **Real-time chat** interface
- ⚡ **React Query** for server state management
- 🎯 **TypeScript** for type safety
- 🎪 **Animation-ready** with Tailwind CSS animations
- 🔐 **Authentication flows** (Sign In, Sign Up, OTP, Forgot Password)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── (auth)/                 # Authentication routes
│   │   ├── sign-in/           # Login page
│   │   ├── sign-up/           # Registration page
│   │   ├── otp/               # One-time password verification
│   │   └── forgot-password/   # Password recovery
│   ├── (authenticated)/       # Protected routes
│   │   ├── dashboard/         # Main dashboard
│   │   ├── apps/              # Applications page
│   │   ├── chats/             # Chat interface
│   │   ├── settings/          # User settings
│   │   ├── help-center/       # Support center
│   │   └── errors/            # Error pages
│   └── globals.css            # Global styles
├── components/                # Reusable UI components
├── hooks/                    # Custom React hooks
├── lib/                      # Utilities and configurations
├── store/                    # Zustand state management
└── types/                    # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd shadcn-admin-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format:check` - Check code formatting with Prettier
- `npm run format` - Format code with Prettier
- `npm run knip` - Run Knip for dead code detection

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[ShadcnUI](https://ui.shadcn.com/)** - Beautifully designed components
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Zustand](https://github.com/pmndrs/zustand)** - State management
- **[React Query](https://tanstack.com/query)** - Server state management
- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Recharts](https://recharts.org/)** - Chart library
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Radix UI](https://www.radix-ui.com/)** - Primitives for accessible components

## 🎨 Customization

### Theming

The project uses CSS variables for theming. Modify the colors in `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode variables */
}
```

### Adding New Pages

1. Create a new folder in `src/app/(authenticated)/`
2. Add a `page.tsx` file for the page content
3. Update the navigation in the sidebar component

### Custom Components

All ShadcnUI components are located in `src/components/ui/`. You can modify existing components or add new ones following the same patterns.

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- 📱 Mobile devices (320px and up)
- 📟 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1280px and up)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Example environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Sat Naing](https://github.com/satnaing) for the original [shadcn-admin](https://github.com/satnaing/shadcn-admin)
- [Shadcn](https://ui.shadcn.com/) for the beautiful component library
- [Vercel](https://vercel.com/) for Next.js and deployment platform
- [Tailwind CSS](https://tailwindcss.com/) for the amazing CSS framework

## 📞 Support

If you have any questions or need help, please:
1. Check the [issues](https://github.com/your-username/shadcn-admin-nextjs/issues) page
2. Create a new issue if your problem isn't already addressed
3. Join our community discussions

---

Built with ❤️ using Next.js, ShadcnUI, and Tailwind CSS