# Portfolio Project Context

## Project Goals
- Create a professional portfolio website
- Showcase projects and skills
- Include blog section for technical writing
- Ensure perfect responsiveness across all devices
- Achieve excellent SEO and performance

## Key Sections
1. Hero/Landing - Introduction with CTA
2. About - Professional background
3. Projects - Portfolio showcase with filtersgit checkout -b feature/hero-section
4. Skills - Technical skillset
5. Blog - Technical articles (MDX)
6. Contact - Contact form with EmailJS

## Design Principles
- Clean, modern, minimalist design
- Dark/light mode support
- Smooth animations and transitions
- Mobile-first responsive approach
- Accessibility first

## Current Status
- [ ] Initial setup complete
- [ ] Basic layout structure
- [ ] Hero section
- [ ] Projects section
- [ ] About section
- [ ] Contact form integration
- [ ] Blog setup
- [ ] SEO optimization
- [ ] Performance optimization
```

## **Step 6: Project Structure Setup**

Create this folder structure:
```
my-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── ThemeToggle.tsx
├── lib/
│   ├── constants.ts
│   └── utils.ts
├── types/
│   └── index.ts
├── public/
│   ├── images/
│   └── fonts/
└── content/
    └── projects/
```

## **Step 7: Cursor AI Workflow Tips**

### **Effective Prompts for Cursor:**

1. **For creating components:**
```
"Create a responsive Hero section component with:
- Animated text using Framer Motion
- Gradient background
- CTA buttons
- Social media links with React Icons
- Mobile-first design with Tailwind"
```

2. **For implementing features:**
```
"Add dark mode toggle functionality:
- Use next-themes library
- Create ThemeToggle component
- Add to navigation
- Persist preference in localStorage
- Smooth transition between themes"
```

3. **For optimization:**
```
"Optimize the Projects section for performance:
- Implement lazy loading for images
- Add loading skeletons
- Use Next.js Image component
- Add proper alt texts
- Implement filter animations with Framer Motion"
```

### **Cursor Composer Multi-file Editing:**
Use Cursor's Composer (Cmd/Ctrl + K) for multi-file edits:
```
"Update the entire portfolio to add a blog section:
1. Create blog page in app/blog/page.tsx
2. Add MDX configuration in next.config.js
3. Create BlogCard component
4. Add blog link to navigation
5. Create sample blog post in content/blog/"