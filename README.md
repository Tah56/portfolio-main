# Tanzim Ahmed – Junior Frontend Developer Portfolio

A modern, fully responsive personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Features

- Responsive navigation bar with mobile menu
- Hero section with professional designation, photo placeholder, resume download button, and social links
- Detailed About Me section
- Skills section focused on frontend (progress bars)
- Education timeline
- Projects section with detail pages
- Contact form + email / phone / WhatsApp
- Clean dark theme with indigo/cyan accents
- Fully responsive across mobile, tablet, and desktop

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## Customization

1. **Personal info** – Update name, bio, contact details, social links in the components under `src/components/`.
2. **Photo** – Add your photo as `public/profile.jpg` and uncomment the `<Image>` in `Hero.tsx`.
3. **Resume** – Place your resume PDF at `public/resume.pdf`.
4. **Projects** – Edit `src/data/projects.ts`.
5. **Colors** – Adjust CSS variables in `src/app/globals.css`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── projects/[id]/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    └── projects.ts
```

## License

MIT – feel free to use this as a starting point for your own portfolio.
