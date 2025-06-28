# DevTo Challenge: June Celebrations 2025 (Goat Cheese Day) – Vite + React + Material UI + Tailwind CSS

Celebrate Goat Cheese Day with this interactive, modern web app built using [Vite](https://vitejs.dev/), [React](https://react.dev/), [Material UI](https://mui.com/), [Tailwind CSS](https://tailwindcss.com/), and [Zustand](https://zustand-demo.pmnd.rs/).

## Features

- Responsive design with Material UI and Tailwind CSS
- Light, dark, and system theme support
- Interactive sections: About, Benefits, Types, Recipes, FAQs, Events, and more
- Newsletter signup and event sidebar
- Downloadable recipe booklet (demo)
- Animated transitions and snackbars
- State management with Zustand

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/goat-cheese-app.git
cd goat-cheese-app
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:

```sh
npm run build
```

To preview the production build:

```sh
npm run preview
```

## Project Structure

- `src/` – Main source code (components, theme, stores, assets)
- `public/` – Static files and images
- `index.html` – Main HTML entry point
- `vite.config.ts` – Vite configuration
- `tsconfig.*.json` – TypeScript configuration

## Customization

- Update theme colors in [`src/theme/material-theme.json`](src/theme/material-theme.json)
- Add or edit cheese types in [`src/components/Types/Types.json`](src/components/Types/Types.json)
- Update FAQs in [`src/components/FAQs/FAQs.json`](src/components/FAQs/FAQs.json)

## Credits

- Goat cheese illustrations and images from Unsplash and credited sources
- Built with [Material UI](https://mui.com/) and [Tailwind CSS](https://tailwindcss.com/)

---

&copy; {year} Goat Cheese Day. All rights reserved.
