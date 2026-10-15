# Portfolio Website

🌐 **Live Demo:** https://briansida.vercel.app

---
A desktop-inspired personal portfolio built with React, TypeScript, and Spring Boot. The application features draggable windows, responsive layouts, a persistent light/dark theme, and a full-stack contact form with client- and server-side validation. The frontend uses Sass, CSS Modules, and BEM naming conventions to maintain organized, reusable styles, alongside accessible HTML to improve usability for keyboard and screen-reader users.

💻 **Technologies**
---
**Frontend**
- React
- TypeScript
- HTML5
- Sass (SCSS)
- CSS Modules
- BEM (Block Element Modifier)
- Fetch API
- LocalStorage

**Backend**
- Java
- Spring Boot
- Spring Framework
- RestClient
- Resend API
- Jakarta Validation
- Maven

**Development and Deployment**
- Git and GitHub
- GitHub Actions
- Vercel (frontend deployment)
- Render (backend deployment)

📑 **Features**
---
**Desktop Interface**
- Desktop-inspired UI with draggable, stackable windows.
- Dynamic z-index management to automatically bring active windows to the front.
- Viewport boundary clamping to keep windows accessible while dragging.
- Responsive behavior for desktop and mobile devices.

**Styling and Accessibility**
- Sass (SCSS) and CSS Modules for organized, locally scoped component styles.
- BEM naming conventions for consistent CSS class naming.
- Semantic HTML and accessible form controls.
- Screen-reader announcements for validation errors, submission status, and clipboard feedback.
- Accessible form states using ARIA attributes to communicate validation errors and submission progress.

**Theme Management**
- Light and dark theme toggle.
- Theme preference persisted using localStorage.

**Contact Form**
- Client-side validation for required fields and email formatting.
- Field-level error messages and invalid-field styling.
- Submission loading state with success and error feedback.
- Contact requests processed through a Spring Boot REST API.
- Emails delivered through the Resend API using Spring's RestClient.

