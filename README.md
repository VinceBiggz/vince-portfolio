# Vincent Wachira Portfolio

A professional, responsive portfolio website showcasing Vincent Wachira's expertise as a senior IT strategist and cloud engineer. Built with modern web technologies and designed for optimal performance and accessibility.

## 🌟 Live Demo

**https://vincebiggz.github.io/vince-portfolio/**

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean white design with smooth animations
- **Professional Projects**: Showcase of 6 flagship projects with detailed descriptions
- **Contact Integration**: Formspree-powered contact form
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Accessibility**: WCAG compliant with proper ARIA labels and focus management
- **Performance**: Lighthouse scores 90+ across all metrics

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages
- **Form Handling**: Formspree

## 📁 Project Structure

```
vince-portfolio/
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   └── ProjectCard.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── assets/
│   │   ├── vincent_wachira_pic_1.jpeg
│   │   └── cloud_native_issue_tracker.png
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Key Projects Showcased

1. **Cloud-Native Issue Tracker System**
   - AWS Lambda, DynamoDB, API Gateway
   - Slack/email integrations, CI/CD pipelines

2. **Zero-Touch Device Deployment & MDM Pipeline**
   - JumpCloud MDM, Ansible, Terraform
   - Automated provisioning and policy enforcement

3. **Enterprise KPI & Analytics Dashboard**
   - Metabase, AWS RDS, Jira/Freshdesk integrations
   - Real-time SLA and operational metrics

4. **InfoSec Compliance Framework Toolkit**
   - ISO 27001-inspired compliance management
   - Django, PostgreSQL, automated workflows

5. **Serverless Web Application Deployment**
   - AWS CloudFormation, S3, CloudFront, Route 53
   - Infrastructure as Code implementation

6. **ML-Powered IT Operations Assistant**
   - Kubernetes, Python, FastAPI, scikit-learn
   - AI-driven service desk optimization

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

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
   ```
   http://localhost:5173/vince-portfolio/
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Adding New Projects

1. Add project image to `src/assets/`
2. Import the image in `src/pages/Projects.jsx`
3. Add project object to the `projects` array:

```javascript
{
  title: "Your Project Title",
  description: "Detailed project description...",
  githubLink: "https://github.com/username/repo",
  demoLink: "https://demo-link.com",
  image: yourProjectImage,
}
```

### Styling

- **Colors**: Primary colors defined in Tailwind config
- **Typography**: Custom font weights and sizes in components
- **Layout**: Responsive grid system using Tailwind classes

## 📱 Responsive Design

- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: Two-column grid for projects
- **Desktop**: Three-column grid, enhanced spacing

## 🔧 Configuration

### Formspree Integration

Update the form endpoint in `src/pages/Contact.jsx`:
```javascript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

### GitHub Pages Deployment

Configured in `vite.config.js`:
```javascript
export default defineConfig({
  base: '/vince-portfolio/',
  plugins: [react()],
})
```

## 📊 Performance Metrics

- **Performance**: 92+
- **Accessibility**: 93+
- **Best Practices**: 100
- **SEO**: 92+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vincent Wachira**
- LinkedIn: [vincentwachira](https://www.linkedin.com/in/vincentwachira)
- GitHub: [VinceBiggz](https://github.com/VinceBiggz)
- Email: wachirakungu@gmail.com

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for icons
- [Formspree](https://formspree.io/) for form handling

---

⭐ **Star this repository if you found it helpful!**
