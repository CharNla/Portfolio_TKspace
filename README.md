# MyPortfolio

A modern personal portfolio website built with **Vite**, **React**, and **Tailwind CSS**.

## Features
- Responsive design, dark mode
- Animated sections and smooth scrolling
- Skills, projects, about, and contact sections
- Deployable to GitHub Pages

## Getting Started

### 1. Clone the repository
```bash
https://github.com/<your-username>/Portfolio_TKspace.git
cd Portfolio_TKspace
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
- Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```
- Output will be in the `docs/` directory (for GitHub Pages).

### 5. Deploy to GitHub Pages
```bash
npm run deploy
```
- Your site will be published at: `https://<your-username>.github.io/Portfolio_TKspace/`

## Project Structure
```
Portfolio_TKspace/
├── client/           # React app source code
├── docs/             # Production build output (for GitHub Pages)
├── server/           # (Optional) Backend code
├── shared/           # Shared types/schemas
├── package.json      # Project scripts and dependencies
├── vite.config.ts    # Vite configuration
└── ...
```

## Customization
- Edit your profile, skills, and content in `client/src/lib/space-theme-config.ts` and related components.
- Change favicon and title in `client/index.html`.

## License
MIT 