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
├── app/ # App router pages
├── components/ # Components
├── lib/ # Library code, utilities
├── types/ # TypeScript types
└── styles/ # Global styles
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
DATABASE_URL=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
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
