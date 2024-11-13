# Baniray Primary School Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://banirray-primary-school.web.app)

An interactive and informative website for Baniray Primary School, designed to provide details about the school, curriculum, and student information with a smooth user experience.

## 🌐 Live Site
- **Live URL**: [https://banirray-primary-school.web.app](https://banirray-primary-school.web.app)

## 📂 Repository Links
- **Client-Side Repository**: [GitHub - Client Side](https://github.com/abdurrahim99100/baniray-primary-school-client-side)
- **Server-Side Repository**: [GitHub - Server Side](https://github.com/abdurrahim99100/baniray-primary-school-server-side)

---

## 📦 Client-Side Technology Stack
This project uses a range of modern front-end technologies to create an efficient and responsive experience.

### Client-Side Dependencies
- **React**: ^18.2.0 - JavaScript library for building user interfaces.
- **React Router DOM**: ^6.20.0 - Provides routing capabilities.
- **@tanstack/react-query**: ^5.59.19 - Data-fetching library for efficient server-state management.
- **Axios**: ^1.7.7 - Promise-based HTTP client for making API requests.
- **Firebase**: ^10.14.1 - Used for authentication and other cloud services.
- **React Fast Marquee**: ^1.6.5 - For smooth and customizable text animations.
- **React Helmet Async**: ^2.0.5 - Manage document head for SEO improvements.
- **React Hook Form**: ^7.53.0 - Simplifies form handling.
- **React Hot Toast**: ^2.4.1 - For notifications and toasts.
- **React Icons**: ^5.3.0 - Icon library for UI enhancements.
- **React Responsive Carousel**: ^3.2.23 - Carousel component for image slideshows.
- **React Tabs**: ^6.0.2 - For creating tabbed components.
- **SweetAlert2**: ^11.14.1 - Beautiful alerts and confirmations.
- **Swiper**: ^11.0.5 - For creating touch sliders and carousels.

### Styling and Utility
- **DaisyUI**: ^4.4.6 - Tailwind CSS component library for styled elements.
- **Tailwind CSS**: ^3.3.5 - Utility-first CSS framework for styling.
- **PostCSS**: ^8.4.31 - Used for transforming CSS with JavaScript.
- **AutoPrefixer**: ^10.4.16 - Adds vendor prefixes to CSS rules automatically.

### Development Tools
- **Vite**: ^5.0.0 - Modern build tool for fast development.
- **ESLint**: ^8.53.0 - Linting tool to maintain code quality.
- **ESLint Plugins**: 
  - **React**: ^7.33.2
  - **React Hooks**: ^4.6.0
  - **React Refresh**: ^0.4.4

---

## 📂 Server-Side Technology Stack

The server side handles the API logic, data management, and connects with the client side to provide real-time updates.

### Server-Side Tools
- **Node.js** - JavaScript runtime environment for executing server-side code.
- **Express** - Web framework for handling API requests.
- **MongoDB** - Database for managing school data.
- **Firebase** - For authentication and cloud services.

---

## 📄 Scripts

### Client-Side Scripts
These scripts are located in the `package.json` of the client repository.

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
