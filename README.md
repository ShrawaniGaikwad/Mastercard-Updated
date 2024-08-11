# NGO Website - Next.js Project

A modern, responsive website for NGOs built with Next.js and styled using Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShrawaniGaikwad/Mastercard-Updated
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mastercard-frontend/
├── public/               # Static files like images and fonts
├── src/
│   ├── app/              # Pages and routing
│   │   ├── layout.js     # Root layout component
│   │   ├── page.js       # Homepage component
│   │   ├── about/        # About page route
│   │   │   └── page.js   # About page component
│   │   ├── contact/      # Contact page route
│   │   │   └── page.js   # Contact page component
│   │   └── projects/     # Projects page route
│   │       └── page.js   # Projects page component
│   ├── components/       # Reusable components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ChatBot.js
│   └── styles/           # Tailwind and global styles
│       └── globals.css
├── .gitignore
├── package.json
└── README.md
```

### File Structure Explanation

- The `src/app` directory uses Next.js 13+ file-based routing system:
  - Each folder in `src/app` represents a route segment.
  - The `page.js` file within each folder is the main component for that route.
  - `layout.js` in the root of `src/app` defines the shared layout for all pages.
  - Nested folders create nested routes (e.g., `src/app/about/page.js` creates the `/about` route).

- Components that are not full pages (like `Header.js`, `Footer.js`) are placed in the `src/components` directory.

- Global styles and Tailwind CSS configurations are in the `src/styles` directory.

## Contributing

### Adding a New Page

1. Create a new folder in `src/app/` with the route name (e.g., `services` for a `/services` route).
2. Add a `page.js` file in that folder with your page content. For example:

   ```jsx
   export default function ServicesPage() {
     return (
       <div>
         <h1>Our Services</h1>
         <p>Details about our services...</p>
       </div>
     );
   }
   ```

3. Add a link to the new page in the Header component (`src/components/Header.js`).

### Adding a New Component

1. Create a new file in `src/components/` (e.g., `Card.js`).
2. Define your component in the new file. For example:

   ```jsx
   export default function Card({ title, content }) {
     return (
       <div className="bg-white p-6 rounded-lg shadow-md">
         <h2 className="text-xl font-semibold mb-4">{title}</h2>
         <p>{content}</p>
       </div>
     );
   }
   ```

3. Import and use the new component where needed.

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

For more details, please refer to the project documentation.
