# 💼 Anish Kumar M - Portfolio Website

A responsive portfolio website built with **React**, **HTML5**, **CSS3**, and **JavaScript**. It presents selected projects, skills, a resume, and contact information in a polished, app-inspired layout.

## 🚀 Features

- **Responsive Design** - Adapts to desktop, tablet, and mobile screens
- **Accessible Navigation** - Sticky section navigation, keyboard focus states, and reduced-motion support
- **Skills Section** - A concise overview of technical skills
- **Professional Experience** - Current Process Associate role and transferable workplace skills
- **Certificates** - Completed Debt Recovery Agent (DRA) certificate and key learning areas
- **Projects Showcase** - Link to your GitHub repositories with project descriptions
- **Resume Integration** - Download and view your resume directly from the portfolio
- **Contact Information** - Clickable email and phone details, plus location
- **Social Media Links** - Connect with LinkedIn, GitHub, and other platforms
- **Modern UI** - A charcoal portfolio with warm-gold accents, a black hero, and a responsive two-column layout
- **Mobile Navigation** - An accessible collapsible menu designed for small screens

## 🛠 Technologies Used

- **React 18** - UI library (via CDN)
- **Babel Standalone** - JSX transpilation (via CDN)
- **HTML5** - Document structure
- **CSS3** - Responsive layout, visual styling, and interaction states
- **JavaScript (ES6+)** - Portfolio content and rendering

## 📋 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── app.js             # React component & logic
├── style.css          # Responsive layout and visual styles
├── resume.pdf         # Resume document
├── my profile pic.jpg # Profile photo
└── README.md          # This file
```

## 🎯 Sections Included

1. **Navigation Bar** - Sticky navbar with links to all sections
2. **Hero Section** - Welcome message with CTA button and profile image
3. **About Me** - Detailed information about you and your career goals
4. **Professional Experience** - Current role and skills developed at work
5. **Technical Skills** - Technical and professional skills grouped by category
6. **Certificates** - Completed training and key learning areas
7. **Featured Projects** - Grid showcasing your GitHub projects
8. **Resume** - Download and view your resume
9. **Contact** - Contact information and social media links
10. **Footer** - Copyright information

## 🚀 How to Use

### 1. Download/Clone the Project
```bash
git clone https://github.com/Anish2076/portfolio.git
cd portfolio
```

### 2. Open in Browser
Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click → Open with → Browser

### 3. Customize Content
Edit `app.js` to update:
- Your name and introduction
- Your current role, training, strengths, and career interests
- The profile image filename (`my profile pic.jpg`)
- The projects array
- The `skillGroups` categories and skills
- Contact information and social media links

### 4. Add Your Resume
- Place your resume PDF in the portfolio folder as `resume.pdf`, or update the resume links in `app.js`.

### 5. Add Profile Photo
Replace `my profile pic.jpg` in `app.js` with the relative path to your image.

## 📄 Customization Guide

### Update Projects
Update the `projects` array in `app.js`:
```javascript
const projects = [
  { id: 1, name: 'Project Name', description: 'Description', url: 'https://github.com/your-username/repo' },
  // Add more projects...
];
```

### Update Skills
Update the `skillGroups` array in `app.js`:
```javascript
const skillGroups = [
  { category: 'Programming', skills: ['Java', 'JavaScript (Basics)'] },
  { category: 'Frontend Development', skills: ['HTML5', 'CSS3', 'Responsive Web Design'] },
];
```

### Change Color Scheme
Edit the CSS custom properties at the top of `style.css` to change the page, text, surface, and accent colors.

## 🔗 Deployment

Deploy your portfolio for free using:

1. **GitHub Pages**
   - Push to GitHub
   - Go to Settings → Pages → Select main branch
   - Your site will be live at `https://username.github.io/portfolio`

2. **Netlify**
   - Drag & drop your folder
   - Instant deployment

3. **Vercel**
   - Connect GitHub repo
   - Auto-deploys on push

## 📞 Contact Information

- **Email**: anishjogi10@gmail.com
- **Phone**: +91 8217634422
- **Location**: Bangalore, India
- **GitHub**: https://github.com/Anish2076
- **LinkedIn**: https://www.linkedin.com/in/anish-kumar-m-876478302

## 💡 Tips for Best Results

1. Use a high-quality profile photo (square format, 500x500px minimum)
2. Keep project descriptions concise and impactful
3. Add relevant keywords to your skills section
4. Make sure resume PDF is properly formatted
5. Test on mobile devices before deploying
6. Update content regularly with new projects

## 🤝 Contributing

Feel free to modify and customize this portfolio for your needs!

## 📝 License

This project is open source and available for personal and commercial use.

## ✨ Credits

Built with ❤️ by Anish Kumar M

---

**Made with React & CSS Magic** ✨
