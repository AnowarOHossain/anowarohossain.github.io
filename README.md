# 🚀 Anowar Hossain - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Computer Science and Engineering student at Shanto-Mariam University of Creative Technology. Built with vanilla HTML, CSS, and JavaScript to demonstrate clean code practices and modern web development skills.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Portfolio+Preview)

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://anowarohossain.github.io/)**

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Sections Overview](#-sections-overview)
- [Customization](#-customization)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)

## ✨ Features

### 🎨 **Design & UI**
- Modern, clean, and minimalist design
- Fully responsive layout (mobile-first approach)
- Smooth animations and transitions
- CSS Grid and Flexbox layout
- Custom CSS variables for easy theming
- Gradient backgrounds and modern color schemes

### 🚀 **Functionality**
- Sticky navigation with active section highlighting
- Smooth scrolling between sections
- Mobile hamburger menu
- Contact form with validation
- Scroll-to-top button
- Typing animation effects
- Stats counter animation
- Project showcase with hover effects

### 📱 **Responsive Design**
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1440px and up)

### ♿ **Accessibility**
- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Color contrast compliance

### ⚡ **Performance**
- Optimized images and assets
- Minified CSS and JavaScript
- Lazy loading for images
- Efficient animations using CSS transforms
- Throttled scroll events
- Intersection Observer API

## 🛠 Technologies Used

### **Frontend**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid/Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter & JetBrains Mono)

### **Tools & Services**
- **Formspree** - Contact form handling
- **GitHub Pages** - Hosting
- **Git** - Version control

## 📁 Project Structure

```
AnowarOHossain/
├── index.html              # Main HTML file
├── style.css               # Stylesheet
├── script.js               # JavaScript functionality
├── images/                 # Image assets
│   └── anowar.png         # Profile image
└── README.md              # Project documentation
```

## 🚀 Getting Started

### **Prerequisites**
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Git (for version control)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnowarOHossain/AnowarOHossain.git
   ```

2. **Navigate to project directory**
   ```bash
   cd AnowarOHossain
   ```

3. **Open in browser**
   ```bash
   # Option 1: Open directly
   open index.html
   
   # Option 2: Use Live Server (VS Code extension)
   # Right-click on index.html → "Open with Live Server"
   
   # Option 3: Use Python server
   python -m http.server 8000
   ```

### **Development Setup**

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a new branch** for your feature
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and test locally
5. **Commit and push** your changes
   ```bash
   git add .
   git commit -m "Add your feature description"
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request** on GitHub

## 📖 Sections Overview

### 🏠 **Hero Section**
- Personal introduction and tagline: "CSE Student | Full-Stack Developer | AI Enthusiast"
- Profile image with animated background
- Call-to-action buttons (Download Resume, Contact Me, Hire Me)
- Statistics showcase (20+ projects, 4+ years learning, 100+ commits)

### 👨‍💻 **About Me**
- Personal background and educational journey
- **University**: Shanto-Mariam University of Creative Technology
- **Program**: B.Sc. in Computer Science & Engineering
- **Duration**: March 2022 – March 2026
- Interactive code snippet visualization

### 🛠 **Skills**
Organized into six main categories:

- **Frontend**: HTML, CSS, Tailwind CSS, JavaScript, React
- **Backend**: Node.js, Express.js, Django
- **Programming Languages**: C++, Java, Python
- **Database**: MySQL, MongoDB
- **APIs & Authentication**: REST APIs, Gemini API
- **Version Control & Design**: Git, GitHub, Figma

### 🚀 **Featured Projects**

1. **[CareerCanvas](https://github.com/AnowarOHossain/CareerCanvas)**
   - 🎯 Career development platform with personalized recommendations
   - 📊 Skill assessments and career guidance tools
   - **Tech Stack**: Python, Django, MySQL, HTML/CSS

2. **[Bangla Calendar](https://github.com/AnowarOHossain/bangla-calendar)**
   - 📅 Comprehensive Bengali calendar application
   - 🎉 Traditional date systems and cultural events
   - **Tech Stack**: JavaScript, HTML, CSS, Bootstrap

3. **[BlogNest](https://github.com/AnowarOHossain/BlogNest)**
   - ✍️ Modern blogging platform with rich text editing
   - 💬 User authentication and comment system
   - **Tech Stack**: Node.js, Express.js, MongoDB, React

4. **[QuickNote](https://github.com/AnowarOHossain/QuickNote)**
   - 📝 Fast and efficient note-taking application
   - 🔍 Categorization and search functionality
   - **Tech Stack**: JavaScript, Local Storage, CSS3, HTML5

5. **[CSE29 Portal](https://github.com/AnowarOHossain/CSE29-Portal)**
   - 🎓 Educational platform for CSE students
   - 📚 Course management and collaborative learning tools
   - **Tech Stack**: React, Node.js, MongoDB, Express.js

### 📧 **Contact**
- Professional contact form with real-time validation
- **Email**: anowarhossain.dev@gmail.com
- **LinkedIn**: [anowarohossain](https://linkedin.com/in/anowarohossain)
- **GitHub**: [AnowarOHossain](https://github.com/AnowarOHossain)

## 🎨 Customization

### **Update Colors**
Modify CSS variables in `style.css`:
```css
:root {
  --primary-color: #667eea;     /* Main brand color */
  --secondary-color: #764ba2;   /* Secondary brand color */
  --accent-color: #f093fb;      /* Accent highlights */
  --text-primary: #2d3748;      /* Main text color */
  --background: #ffffff;        /* Background color */
}
```

### **Content Updates**
- **Personal Info**: Update details in `index.html`
- **Profile Image**: Replace `images/anowar.png`
- **Projects**: Modify project details and GitHub links
- **Contact**: Update email and social media links

### **Contact Form Setup**
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form action URL:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## ⚡ Performance Metrics

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3 seconds on 3G

### **Optimization Techniques**
- CSS and JavaScript minification
- Image lazy loading and optimization
- Hardware-accelerated animations
- Efficient DOM manipulation
- Throttled scroll events

## 🌐 Browser Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|--------|
| Chrome  | 60+           | ✅ Full Support |
| Firefox | 55+           | ✅ Full Support |
| Safari  | 12+           | ✅ Full Support |
| Edge    | 79+           | ✅ Full Support |

## 📱 Responsive Design

```css
/* Breakpoint Strategy */
@media (max-width: 480px)  { /* Small phones */ }
@media (max-width: 768px)  { /* Large phones & small tablets */ }
@media (max-width: 1024px) { /* Tablets & small laptops */ }
@media (min-width: 1440px) { /* Large desktops */ }
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### **How to Contribute**
1. **Fork** the project
2. **Create** your feature branch: `git checkout -b feature/AmazingFeature`
3. **Commit** your changes: `git commit -m 'Add some AmazingFeature'`
4. **Push** to the branch: `git push origin feature/AmazingFeature`
5. **Open** a Pull Request

### **Contribution Guidelines**
- Follow the existing code style and structure
- Test changes across different browsers and devices
- Update documentation for new features
- Add meaningful commit messages
- Ensure responsive design compatibility

## 📊 GitHub Statistics

![Anowar's GitHub Stats](https://github-readme-stats.vercel.app/api?username=AnowarOHossain&show_icons=true&theme=radical&count_private=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=AnowarOHossain&layout=compact&theme=radical)

![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=AnowarOHossain&theme=radical)

## 🏗️ Repository Activity

**Last Updated**: September 23, 2025 17:57 UTC

### **Top Repositories** (by recent activity):
1. 🗓️ **[bangla-calendar](https://github.com/AnowarOHossain/bangla-calendar)** - Bengali calendar application
2. 👤 **[AnowarOHossain](https://github.com/AnowarOHossain/AnowarOHossain)** - Portfolio website (this repo)
3. 🎓 **[CSE29-Portal](https://github.com/AnowarOHossain/CSE29-Portal)** - Educational platform
4. 💼 **[CareerCanvas](https://github.com/AnowarOHossain/CareerCanvas)** - Career development platform
5. 📝 **[BlogNest](https://github.com/AnowarOHossain/BlogNest)** - Modern blogging platform

## 🎯 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog integration
- [ ] Project filtering and search
- [ ] Multilingual support (Bengali/English)
- [ ] Progressive Web App (PWA) features
- [ ] Advanced animations and micro-interactions

## 📞 Contact Information

**Anowar Hossain**  
*Computer Science & Engineering Student*

- 🎓 **University**: Shanto-Mariam University of Creative Technology
- 📅 **Academic Period**: March 2022 – March 2026
- 📧 **Email**: [anowarhossain.dev@gmail.com](mailto:anowarhossain.dev@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/anowarohossain](https://linkedin.com/in/anowarohossain)
- 🐱 **GitHub**: [github.com/AnowarOHossain](https://github.com/AnowarOHossain)
- 🌐 **Portfolio**: [anowarohossain.github.io](https://anowarohossain.github.io/)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Font Awesome](https://fontawesome.com/)** - Beautiful icon library
- **[Google Fonts](https://fonts.google.com/)** - Inter & JetBrains Mono typography
- **[Formspree](https://formspree.io/)** - Contact form backend service
- **[GitHub Pages](https://pages.github.com/)** - Free static site hosting
- **[Shanto-Mariam University](https://smuct.edu.bd/)** - Academic foundation
- **Developer Community** - Inspiration and best practices

## 🔄 Version History

- **v1.0.0** (September 2025)
  - 🚀 Initial portfolio release
  - 📱 Fully responsive design
  - ⚡ Performance optimizations
  - 🎨 Modern UI/UX design
  - 📧 Contact form integration
  - ♿ Accessibility improvements

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

**Built with ❤️ by [Anowar Hossain](https://github.com/AnowarOHossain)**

*© 2025 • Last updated: September 23, 2025 at 17:57 UTC*

</div>