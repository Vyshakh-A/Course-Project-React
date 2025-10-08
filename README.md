# Modern Course Website – React + Vite

A professional, responsive course platform built with **React**, **Vite**, **React Router**, and modular CSS.  
This project is designed for scalability, clean code, and a modern user experience.

---

## 🚀 Features

- **Home Page:** Hero section, features, categories, and call-to-action.
- **Courses Page:** Dynamic course listing with reusable cards and images.
- **Resources Page:** Quick access to study notes and quizzes, with search/filter.
- **Notes:** Concise, filterable study notes in a responsive grid.
- **Quizzes:** Interactive topic-based quizzes with instant feedback.
- **Login:** Simple login form with validation.
- **Reusable Components:** HeroSection, NavBar, Footer, CourseCard, QuickCard, CategoryCard, AboutMe, etc.
- **Responsive Design:** CSS Grid, Flexbox, and media queries for all devices.
- **Accessibility:** Semantic HTML, focus states, and color contrast.

---

## 🗂️ Project Structure

```
src/
  assets/         # Images and icons
  components/     # Reusable UI components
  data/           # Static data (courses, categories, notes)
  pages/          # Main route pages (Home, Courses, Resources, Login)
    Resources/
      Notes/      # Notes page and styles
      Quizzes/    # Quizzes page and styles
  App.jsx         # Main app with routing
  index.css       # Global styles
```

---

## 🛠️ Tech Stack

- **React** (functional components, hooks)
- **Vite** (fast dev/build)
- **React Router** (routing)
- **Modular CSS** (scoped styles)
- **ESLint** (code quality)

---

## 📈 Current Status

- Core pages and routing implemented
- Responsive layouts and modular components
- Notes and Quizzes sections working with sample data
- Basic login form (no authentication yet)
- Clean, minimal UI with gradients, shadows, and hover effects

---

## 📝 Future Improvements

- **User Authentication:** Add real login/signup and protected routes
- **Profile Page:** User dashboard and progress tracking
- **Course Details:** Expand course cards to full course pages
- **Admin Panel:** Manage courses, notes, and quizzes
- **Pagination/Infinite Scroll:** For large lists
- **Dark Mode:** Theme toggle for accessibility
- **SEO:** Dynamic meta tags and page titles
- **Unit Tests:** Add Jest/React Testing Library coverage
- **404 Page:** Friendly not-found route
- **Accessibility Audit:** Further improvements for WCAG compliance

---

## 💡 Getting Started

1. **Install dependencies:**  
   `npm install`

2. **Run the dev server:**  
   `npm run dev`

3. **Build for production:**  
   `npm run build`

---

## 🤝 Contributing

Pull requests and suggestions are welcome!  
Please open an issue for bugs or feature requests.

---

## 📄 License

MIT

---
