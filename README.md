# NextJS Boilerplate

A modern, feature-rich boilerplate for building scalable web applications with Next.js 15, React 19, and TypeScript.

## 🚀 Features

- **Modern Stack**

  - Next.js 15 with App Router
  - React 19
  - TypeScript
  - Tailwind CSS
  - Prisma ORM
  - NextAuth.js v5

- **Authentication**

  - OAuth providers support
  - Protected routes

- **UI/UX**

  - Dark/Light mode
  - Responsive design
  - Modern animations
  - Toast notifications
  - Form validation

- **Developer Experience**
  - TypeScript
  - ESLint
  - Prettier
  - Import sorting
  - Tailwind sorting
  - Turbopack support

## 📦 Tech Stack

### Core

- Next.js 15.1.3
- React 19.0.0
- TypeScript 5.x

### UI & Styling

- Tailwind CSS 3.4.1
- Lucide Icons
- Next Themes
- Sonner (Toast notifications)

### Forms & Validation

- React Hook Form 7.54.2
- Zod 3.24.1
- @hookform/resolvers

### Authentication

- NextAuth.js 5.0 (Beta)
- Prisma Adapter

### Database

- Prisma ORM 6.1.0
- Prisma Client

### Development Tools

- ESLint 9.x
- Prettier 3.4.2
- Tailwind Merge
- Various Prettier plugins

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/RomaLetodiani/nextjs-boilerplate
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env
```

4. **Initialize database**

```bash
npm run db:reset
```

5. **Start development server**

```bash
npm run dev
```

## 📝 Scripts

- `dev`: Start development server with Turbopack
- `build`: Build production application
- `start`: Start production server
- `lint`: Run ESLint
- `format`: Format code with Prettier
- `db:generate`: Generate Prisma client
- `db:push`: Push database schema
- `db:reset`: Reset database

## 🏗️ Project Structure

```
src/
├── app/                   # App router pages
│   ├── (auth)/            # Authentication routes
│   │   └── login/
│   ├── (home)/            # Public pages
│   │   ├── about/
│   │   ├── blog/
│   │   ├── changelog/
│   │   ├── contact/
│   │   ├── docs/
│   │   ├── help/
│   │   ├── legal/
│   │   ├── pricing/
│   │   ├── resources/
│   │   ├── search/
│   │   ├── sitemap/
│   │   ├── status/
│   │   ├── layout.tsx     # Home Layout
│   │   └── page.tsx       # Homepage
│   ├── api/               # API routes
│   └── dashboard/         # Protected dashboard
├── assets/                # Assets
│   ├── hero.png           # Hero Image
│   └── svgs               # SVGs
├── components/            # Reusable components
│   ├── (auth)/            # Auth components
│   ├── (home)/            # Public components
│   │   └── views/         # Homepage sections
│   ├── common/            # Shared components
│   └── dashboard/         # Dashboard components
├── layout/                # Layout components
│   ├── (auth)/            # Auth layout
│   ├── (home)/            # Public layout
│   │   ├── header/
│   │   └── footer/
│   └── dashboard/         # Dashboard layout
├── lib/                   # Library code
│   ├── auth/              # Authentication
│   ├── prisma/            # Database
│   └── logger             # Logger
├── types/                 # TypeScript types
└── utils/                 # Utilities
```

## 🔒 Legal Pages

The boilerplate includes pre-built legal pages:

- Privacy Policy
- Terms & Conditions
- Cookie Policy
- GDPR Compliance
- Service Level Agreement
- Data Processing Agreement
- Acceptable Use Policy
- Copyright Policy
- Refund Policy

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Database (PostgreSQL recommended)

### Environment Variables

```env
DATABASE_URL=""
NEXTAUTH_URL=""
NEXTAUTH_SECRET=""
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Roman Letodiani**

- LinkedIn: [@roman-letodiani](https://www.linkedin.com/in/letodiani-roma/)
- Email: Roman.Letodiani03@Gmail.com

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 🙏 Special Thanks

This project leverages these amazing technologies:

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://next-auth.js.org/)

### Additional Technologies

- [![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=react&logoColor=white)](https://react-hook-form.com/)
- [![Zod](https://img.shields.io/badge/Zod-3068B7?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
- [![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-5E6AD2?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
- [![Next Themes](https://img.shields.io/badge/Next_Themes-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://github.com/pacocoursey/next-themes)
- [![Sonner](https://img.shields.io/badge/Sonner-FF4088?style=for-the-badge&logo=toast&logoColor=white)](https://sonner.emilkowal.ski/)

### Development Tools

- [![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
- [![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)
- [![Turbopack](https://img.shields.io/badge/Turbopack-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://turbo.build/pack)

## 💝 Support

If you find this project helpful, please consider:

- ⭐ Starring the project on GitHub
- 🐛 Opening issues for bugs or feature requests
- 🔀 Contributing with pull requests
- 📢 Sharing the project with others

## 🤝 Community

Join our community to get help, share ideas, and collaborate:

- [Discussions](https://github.com/yourusername/nextjs-boilerplate/discussions)
- [Discord](https://discord.gg/yourdiscord)
- [Twitter](https://twitter.com/yourtwitter)

---

<p align="center">Made with ❤️ by <a href="https://www.linkedin.com/in/letodiani-roma/">Roman Letodiani</a></p>
