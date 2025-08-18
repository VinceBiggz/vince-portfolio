# Vincent Wachira - Senior IT Strategist & Cloud Engineer Portfolio

![Portfolio Preview](https://raw.githubusercontent.com/VinceBiggz/vince-portfolio/main/src/assets/vincent_wachira_pic_1.jpeg)

## 🚀 **Live Demo**
**[View Live Portfolio](https://VinceBiggz.github.io/vince-portfolio/)**

## 📋 **Overview**

A modern, responsive portfolio website showcasing Vincent Wachira's expertise in cloud architecture, DevOps, cybersecurity, automation, and AI/ML integration. Built with React 18, Vite, and Tailwind CSS, featuring advanced animations, performance optimizations, and comprehensive content sections.

## ✨ **Key Features**

### 🎨 **Design & UX**
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Dark Mode Toggle**: Persistent theme switching with system preference detection
- **Accessibility**: ARIA labels, skip links, and keyboard navigation support
- **Performance Optimized**: Lazy loading, image optimization, and bundle splitting

### 📊 **Content Sections**
- **Hero Section**: Professional introduction with animated elements
- **About Section**: Detailed bio, achievements, and core expertise
- **Projects**: Six featured projects with status indicators and tech stacks
- **Blog Section**: Latest insights and articles (sample content)
- **Testimonials**: Client feedback and recommendations
- **Social Media**: Platform statistics and engagement metrics
- **Contact Form**: Integrated with Formspree for seamless communication

### 🔧 **Technical Features**
- **Performance Monitoring**: Custom analytics and performance tracking
- **Image Optimization**: Lazy loading and preloading for better UX
- **Code Quality**: ESLint configuration with flat config format
- **CI/CD Pipelines**: Dual deployment with GitHub Actions and CircleCI
- **Security**: Comprehensive .gitignore and security best practices

## 🛠 **Tech Stack**

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Router DOM** - Client-side routing

### **Development Tools**
- **ESLint** - Code linting with flat config
- **Prettier** - Code formatting
- **Lucide React** - Icon library
- **Formspree** - Form handling and submissions

### **Performance & Optimization**
- **Intersection Observer** - Lazy loading implementation
- **Bundle Splitting** - Manual chunks for vendor and animation code
- **Image Optimization** - Custom OptimizedImage component
- **Performance Monitoring** - Custom analytics utility

## 📁 **Project Structure**

```
vince-portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AboutSection.jsx
│   │   ├── BlogSection.jsx
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── OptimizedImage.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SocialMediaSection.jsx
│   │   └── TestimonialsSection.jsx
│   ├── contexts/           # React Context providers
│   │   └── ThemeContext.jsx
│   ├── hooks/              # Custom React hooks
│   │   └── usePerformance.js
│   ├── layouts/            # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/              # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── utils/              # Utility functions
│   │   └── analytics.js
│   └── assets/             # Static assets
├── .github/workflows/      # GitHub Actions CI/CD
├── .circleci/              # CircleCI configuration
├── public/                 # Public assets
└── dist/                   # Build output
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/VinceBiggz/vince-portfolio.git
   cd vince-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173/vince-portfolio/`

## 📜 **Available Scripts**

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run lint` | Run ESLint on source files |
| `npm run lint:fix` | Fix ESLint errors automatically |
| `npm run format` | Format code with Prettier |
| `npm run test:build` | Test production build |
| `npm run analyze` | Analyze bundle size |
| `npm run performance` | Run performance tests |

## 🎯 **Key Projects Showcased**

### **1. Cloud-Native Issue Tracker System**
- **Status**: In Development
- **Tech Stack**: AWS Lambda, DynamoDB, API Gateway, React, GitHub Actions
- **Description**: Fully containerized, serverless issue tracking platform with Slack integration

### **2. Zero-Touch Device Deployment & MDM Pipeline**
- **Status**: Planned
- **Tech Stack**: JumpCloud MDM, Ansible, Terraform, Python, Docker
- **Description**: Automated provisioning pipeline for laptops and mobile devices

### **3. Enterprise KPI & Analytics Dashboard**
- **Status**: Planned
- **Tech Stack**: Metabase, AWS RDS, Jira, Freshdesk integrations
- **Description**: Centralized KPI reporting with role-based views

### **4. InfoSec Compliance Framework Toolkit**
- **Status**: Planned
- **Tech Stack**: Django, PostgreSQL, Bootstrap
- **Description**: ISO 27001-inspired compliance management system

### **5. Serverless Web Application Deployment**
- **Status**: Planned
- **Tech Stack**: AWS CloudFormation, S3, CloudFront, Route 53
- **Description**: Reference implementation for secure, scalable web applications

### **6. ML-Powered IT Operations Assistant**
- **Status**: Planned
- **Tech Stack**: Python, FastAPI, scikit-learn, Kubernetes
- **Description**: Microservice for predicting ticket resolution times

## ⚙️ **Configuration**

### **Formspree Integration**
The contact form is configured to use Formspree. Update the endpoint in `src/pages/Contact.jsx`:
```javascript
const response = await fetch("https://formspree.io/f/xpzgwqzg", {
  // form configuration
});
```

### **GitHub Pages Deployment**
The project is configured for GitHub Pages deployment with the base path `/vince-portfolio/`. Update `vite.config.js` and `package.json` if deploying to a different path.

### **Analytics Configuration**
Custom analytics tracking is implemented in `src/utils/analytics.js`. The system tracks:
- Page views and navigation
- User interactions and engagement
- Performance metrics (FCP, LCP)
- Form submissions and project views

## 📱 **Responsive Design**

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

All components adapt seamlessly across devices with optimized layouts and touch-friendly interactions.

## 🔒 **Security Features**

- **Comprehensive .gitignore**: Prevents sensitive data from being committed
- **No hardcoded secrets**: All sensitive information is properly managed
- **Secure form handling**: Formspree integration with proper validation
- **Content Security Policy**: Configured for production deployment

## 🚀 **Performance Metrics**

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: Optimized with code splitting

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Author**

**Vincent Wachira**
- **GitHub**: [@VinceBiggz](https://github.com/VinceBiggz)
- **LinkedIn**: [Vincent Wachira](https://www.linkedin.com/in/vincentwachira)
- **Portfolio**: [vince-portfolio](https://VinceBiggz.github.io/vince-portfolio/)

## 🙏 **Acknowledgments**

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Formspree** for form handling
- **GitHub Pages** for hosting
- **Vite** for fast development experience

---

⭐ **Star this repository if you found it helpful!**
