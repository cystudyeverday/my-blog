# My Blog

A modern personal blog built with Next.js 15 (App Router) and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🌙 Dark mode support
- ⚡ Fast and optimized with Next.js 15
- 🎯 Three main sections: Introduction, Projects, and Contact

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
my-blog/
├── app/
│   ├── introduction/    # Introduction page
│   ├── projects/        # Projects page
│   ├── contact/         # Contact page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   └── Navigation.tsx   # Navigation component
└── public/              # Static assets
```

## Customization

You can customize the content by editing:
- `app/page.tsx` - Home page content
- `app/introduction/page.tsx` - Introduction content
- `app/projects/page.tsx` - Projects list
- `app/contact/page.tsx` - Contact information and form

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

