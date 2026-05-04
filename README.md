# Sonali Mali — Portfolio

A clean, minimal personal portfolio built with **React** and **basic CSS**.

## Project Structure

```
sonali-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.js        # Landing hero section
│   │   ├── Hero.css
│   │   ├── About.js       # About me + stats
│   │   ├── About.css
│   │   ├── Skills.js      # Skill bars
│   │   ├── Skills.css
│   │   ├── Projects.js    # Project cards
│   │   ├── Projects.css
│   │   ├── Contact.js     # Contact links + copy email
│   │   └── Contact.css
│   ├── App.js             # Root component + Navbar
│   ├── App.css
│   ├── index.js           # React entry point
│   └── index.css          # Global styles & CSS variables
├── package.json
└── README.md
```

## How to Run

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
Opens at **http://localhost:3000**

### 3. Build for production
```bash
npm run build
```

## How to Customize

- **Your info** → Edit the data arrays at the top of each component file
- **Colors** → Change CSS variables in `src/index.css` under `:root`
- **Projects** → Edit the `PROJECTS` array in `src/components/Projects.js`
- **Skills** → Edit the `SKILLS` array in `src/components/Skills.js`

## Technologies Used

- React 18
- Basic CSS (no UI library)
- CSS Variables for theming
- Responsive design with media queries
- Google Fonts (DM Serif Display + DM Sans)
