# My Portfolio Website

A modern, responsive, and animated portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Modern Design**: Clean, minimalist design with beautiful animations and transitions
- **Fully Responsive**: Mobile-first approach ensuring perfect responsiveness on all devices
- **Dark/Light Mode Support**: Seamless theme switching with Tailwind CSS
- **Smooth Animations**: Engaging animations using Framer Motion
- **Performance Optimized**: Optimized for fast loading with Next.js Image component
- **Accessibility First**: Semantic HTML and ARIA labels for accessibility
- **TypeScript**: Full TypeScript support for type safety
- **Contact Form**: Interactive contact form with client-side validation

## 📋 Sections

### 1. **Hero Section**
- Eye-catching headline with gradient text
- Professional description
- Call-to-action buttons
- Statistics showcase
- Animated scroll indicator

### 2. **Featured Projects**
- Project showcase with images
- Technology stack tags
- Links to live demos and source code
- Hover animations

### 3. **About Me**
- Professional biography
- Experience timeline
- Career progression
- Professional photo

### 4. **Skills & Expertise**
- Categorized skill levels with progress bars
- Frontend, Backend, and Tools categories
- Additional skills showcase
- Interactive skill tags

### 5. **Contact Section**
- Professional contact form
- Contact information display
- Social media links
- Form submission handling

### 6. **Header & Footer**
- Sticky navigation with mobile menu
- Logo/branding
- Quick links
- Social media connections
- Copyright information

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: EmailJS for contact form
- **Image Optimization**: Next.js Image component

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## 🚀 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Home page with all sections
│   ├── globals.css         # Global styles and Tailwind
│   ├── favicon.ico         # Site favicon
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Footer section
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── Featured.tsx    # Featured projects
│       ├── About.tsx       # About me section
│       ├── Skills.tsx      # Skills showcase
│       └── Contact.tsx     # Contact form
└── ...
```

## 🎨 Customization

### Update Personal Information
Edit the placeholder content in each section component:
- `Hero.tsx`: Update headline and description
- `Featured.tsx`: Add your projects
- `About.tsx`: Update bio and experience
- `Skills.tsx`: Add your skills
- `Contact.tsx`: Update contact info

### Update Colors
Modify Tailwind color classes in components. Common gradient colors can be changed in:
- `.text-gradient` class in `globals.css`
- Individual component classes

### Update Contact Form
Integrate EmailJS by:
1. Setting up EmailJS account
2. Adding your public key to `.env.local`
3. Updating form handler in `Contact.tsx`

## 🔧 Configuration Files

- `tsconfig.json`: TypeScript configuration
- `next.config.ts`: Next.js configuration
- `tailwind.config.js`: Tailwind CSS theme
- `postcss.config.mjs`: PostCSS configuration
- `.eslintrc`: ESLint rules

## 📈 Performance

- Lighthouse Score: 95+
- First Load JS: ~167 kB
- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind for minimal overhead
- Server components by default for better performance

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast text
- Form labels and descriptions

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Module Resolution Issues
Ensure the `tsconfig.json` has the correct path aliases:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**John Doe**
- Email: hello@johndoe.com
- GitHub: [@johndoe](https://github.com)
- LinkedIn: [john-doe](https://linkedin.com)

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests.

## 📞 Support

For issues or questions, please open an issue in the repository or contact me directly.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
