const { useState } = React;

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareMessage, setShareMessage] = useState('');

  const navigateToSection = (event, sectionId) => {
    event.preventDefault();
    setIsMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (!section) {
      console.error(`Portfolio section not found: ${sectionId}`);
      return;
    }

    window.history.pushState({ portfolioView: true }, '', `#${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const shareUrl = 'https://anish2076.github.io/Portfolio/';
  const shareTitle = 'Anish Kumar M | Aspiring Web Developer';
  const shareText = "Explore Anish Kumar M's web developer portfolio.";
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const encodedShareText = encodeURIComponent(`${shareText} ${shareUrl}`);

  const sharePortfolio = async () => {
    if (!navigator.share) {
      setIsShareOpen(true);
      setShareMessage('Choose an app below to share my portfolio.');
      return;
    }

    try {
      await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
      setShareMessage('Portfolio shared successfully.');
      setIsShareOpen(false);
    } catch (error) {
      if (error.name !== 'AbortError') {
        setShareMessage('Sharing failed. Choose an app below or copy the link.');
      }
    }
  };

  const copyPortfolioLink = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const input = document.createElement('textarea');
        input.value = shareUrl;
        input.setAttribute('readonly', '');
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        const wasCopied = document.execCommand('copy');
        document.body.removeChild(input);
        if (!wasCopied) {
          throw new Error('Clipboard copy was not accepted by the browser.');
        }
      }
      setShareMessage('Portfolio link copied to clipboard.');
    } catch (error) {
      setShareMessage(`Could not copy the portfolio link: ${error.message}`);
    }
  };

  const projects = [
    {
      id: 1,
      name: 'Freelancing Website (Webora Technologies)',
      type: 'Freelancing website · Webora Technologies',
      description: 'A responsive website for a freelance web design and development service, showcasing website development, responsive design, UI/UX, and website refreshes. It introduces the project workflow and helps potential clients enquire about a website.',
      url: 'https://anish2076.github.io/webora-technologies/',
    },
  ];

  const skillGroups = [
    { category: 'Programming', skills: ['Java', 'JavaScript (Basics)'] },
    { category: 'Frontend Development', skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'] },
    { category: 'Backend Development', skills: ['Java', 'PHP (Learning)'] },
    { category: 'Database', skills: ['MySQL', 'SQL Fundamentals'] },
    { category: 'Tools', skills: ['Git', 'GitHub', 'VS Code'] },
    { category: 'UI/UX Design', skills: ['Figma', 'Wireframing', 'Prototyping'] },
    { category: 'Professional Skills', skills: ['Communication', 'Problem-solving', 'Customer handling', 'Teamwork', 'Adaptability'] },
  ];

  const strengths = [
    'Willingness to learn and adapt to new technologies',
    'Communication and teamwork',
    'Problem-solving and logical thinking',
    'Learning through hands-on projects',
  ];

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'anishjogi10@gmail.com', link: 'mailto:anishjogi10@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 8217634422', link: 'tel:+918217634422' },
    { icon: '📍', label: 'Location', value: 'Bangalore, India', link: null },
  ];

  const socialLinks = [
    { icon: '💻', name: 'GitHub', url: 'https://github.com/Anish2076' },
    { icon: '💼', name: 'LinkedIn', url: 'https://www.linkedin.com/in/anish-kumar-m-876478302/' },
  ];

  return (
      <div className="portfolio-page">
    <main className="portfolio-layout">
      <section className="portfolio-panel portfolio-left">
        <nav className="navbar" aria-label="Main navigation">
          <div className="nav-container">
            <button
              className="menu-toggle"
              type="button"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a className="logo" href="#home" aria-label="Anish Kumar M, home" onClick={event => navigateToSection(event, 'home')}>
              <span className="logo-mark" aria-hidden="true">A</span>
              <span className="logo-name">Anish Kumar M</span>
            </a>
            <div className="share-control">
              <button
                className="share-button"
                type="button"
                aria-expanded={isShareOpen}
                aria-controls="share-options"
                onClick={() => {
                  setIsShareOpen(!isShareOpen);
                  setShareMessage('');
                }}
              >
                <span aria-hidden="true">↗</span> Share
              </button>
              {isShareOpen && (
                <div className="share-menu" id="share-options" aria-label="Share portfolio">
                  <button className="share-option" type="button" onClick={sharePortfolio}>
                    Share with apps
                  </button>
                  <a
                    className="share-option"
                    href={`https://wa.me/?text=${encodedShareText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a
                    className="share-option"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="share-option"
                    href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodedShareText}`}
                  >
                    Email
                  </a>
                  <button className="share-option" type="button" onClick={copyPortfolioLink}>
                    Copy link
                  </button>
                </div>
              )}
              <p className="share-status" aria-live="polite">{shareMessage}</p>
            </div>
            <ul id="primary-navigation" className={`nav-menu${isMenuOpen ? ' is-open' : ''}`}>
              <li><a href="#home" onClick={event => navigateToSection(event, 'home')}>Home</a></li>
              <li><a href="#about" onClick={event => navigateToSection(event, 'about')}>About</a></li>
              <li><a href="#skills" onClick={event => navigateToSection(event, 'skills')}>Services</a></li>
              <li><a href="#certificates" onClick={event => navigateToSection(event, 'certificates')}>Certificates</a></li>
              <li><a href="#projects" onClick={event => navigateToSection(event, 'projects')}>Portfolio</a></li>
              <li><a href="#contact" onClick={event => navigateToSection(event, 'contact')}>Contact</a></li>
            </ul>
          </div>
        </nav>

        <div className="panel-main">
          <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-copy">
                <p className="hero-label"><span className="status-dot" aria-hidden="true"></span> Seeking entry-level opportunities</p>
                <p className="hero-eyebrow">Aspiring Web Developer</p>
                <h1 className="hero-title">I'm Anish<br />Kumar M</h1>
                <p className="hero-subtitle">I'm looking for an entry-level web development role where I can build responsive websites, contribute to real projects, and grow as a developer.</p>
                <div className="hero-actions">
                  <a className="cta-btn" href="#projects" onClick={event => navigateToSection(event, 'projects')}>Explore my work <span aria-hidden="true">↗</span></a>
                  <a className="text-link" href="#about" onClick={event => navigateToSection(event, 'about')}>A little about me <span aria-hidden="true">↓</span></a>
                </div>
                <ul className="hero-specialties" aria-label="Areas of focus">
                  <li>Responsive web design</li>
                  <li>Java &amp; MySQL</li>
                  <li>Figma &amp; prototyping</li>
                </ul>
                <div className="hero-meta">
                  <span>Bangalore, India</span>
                  <span className="meta-divider" aria-hidden="true"></span>
                  <span>Java · Frontend · MySQL</span>
                </div>
              </div>
              <div className="hero-image">
                <img src="my profile pic cutout.png" alt="Anish Kumar M" className="profile-img" />
              </div>
            </div>
          </div>
          </section>

        <section id="about" className="about-section section-shell">
          <div className="section-heading">
            <p className="section-kicker">01 / About</p>
            <h2>Learning by building. <span>Growing with purpose.</span></h2>
          </div>
          <div className="about-content">
            <div className="about-primary">
              <p className="about-lead">I'm a motivated aspiring software developer with a background in computer applications and a strong interest in web development.</p>
              <p className="about-summary">I enjoy learning new technologies, developing practical projects, and continuously improving my technical skills.</p>
            </div>
            <div className="about-details">
              <div className="about-strengths">
                <h3>Professional strengths</h3>
                <ul>
                  {strengths.map(strength => <li key={strength}>{strength}</li>)}
                </ul>
              </div>
              <div className="career-interest">
                <span className="section-kicker">Career interests</span>
                <p>I'm seeking junior front-end or software development opportunities where I can apply my knowledge, contribute to meaningful projects, and grow as a software professional.</p>
              </div>
              <a className="inline-link" href="resume.pdf" target="_blank" rel="noopener noreferrer">View my resume <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section section-shell">
          <div className="section-heading">
            <p className="section-kicker">02 / Experience</p>
            <h2>Professional experience <span>that builds people skills.</span></h2>
          </div>
          <article className="experience-card">
            <div className="experience-marker" aria-hidden="true"></div>
            <div className="experience-main">
              <div className="experience-heading">
                <div>
                  <p className="experience-company">1Point1 Solutions</p>
                  <h3>Process Associate</h3>
                </div>
                <span className="experience-status"><span></span> Current role</span>
              </div>
              <p className="experience-summary">I support customers by responding to queries professionally and following established processes to help deliver a consistent service experience.</p>
              <h4 className="experience-subheading">Key responsibilities</h4>
              <ul className="experience-responsibilities">
                <li>Handle customer queries and provide timely support.</li>
                <li>Communicate with customers in a clear and professional manner.</li>
                <li>Follow company procedures and maintain accurate records.</li>
              </ul>
              <h4 className="experience-subheading skills-subheading">Skills developed</h4>
              <ul className="experience-skills" aria-label="Skills developed in this role">
                <li>Communication</li>
                <li>Customer handling</li>
                <li>Problem-solving</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
              </ul>
              <p className="experience-growth">I look forward to continuing my learning journey, embracing new challenges, and growing both personally and professionally.</p>
            </div>
          </article>
        </section>

        </div>
      </section>

      <aside className="portfolio-panel portfolio-right" aria-label="Portfolio details">
        <div className="panel-main">
        <section id="skills" className="skills-section section-shell">
          <div className="section-heading">
            <p className="section-kicker">03 / What I do</p>
            <h2>My services <span>&amp; skills.</span></h2>
          </div>
          <div className="skills-content">
            <p className="section-description">Technologies and tools I have learned, practiced, and continue to develop.</p>
            <div className="skill-groups">
              {skillGroups.map(group => (
                <div className="skill-group" key={group.category}>
                  <h3>{group.category}</h3>
                  <ul>
                    {group.skills.map(skill => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="projects-section section-shell certificates-section">
          <div className="section-heading">
            <p className="section-kicker">04 / Certificates</p>
            <h2>Training completed <span>with purpose.</span></h2>
          </div>
          <div className="certificates-content">
            <article className="certificate-card">
              <div className="certificate-card-heading">
                <div>
                  <p className="certificate-status">Completed</p>
                  <h3>Java Full Stack Development</h3>
                </div>
                <span className="certificate-badge" aria-hidden="true">Java</span>
              </div>
              <p className="certificate-description">Completed the Java Full Stack Development training program at TAP Academy.</p>
              <p className="certificate-issuer"><strong>Training provider:</strong> TAP Academy</p>
              <a
                className="certificate-link"
                href="https://lnkd.in/p/dZm-kdbe"
                target="_blank"
                rel="noopener noreferrer"
              >
                View certificate on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </article>
            <article className="certificate-card">
              <div className="certificate-card-heading">
                <div>
                  <p className="certificate-status">Completed</p>
                  <h3>Debt Recovery Agent (DRA) Certification – IIBF</h3>
                </div>
                <span className="certificate-badge" aria-hidden="true">DRA</span>
              </div>
              <p className="certificate-description">Completed certification from the Indian Institute of Banking &amp; Finance (IIBF).</p>
              <p className="certificate-issuer"><strong>Issued organization:</strong> Indian Institute of Banking &amp; Finance (IIBF)</p>
              <h4>Key skills</h4>
              <ul>
                <li>Debt Recovery Fundamentals</li>
                <li>Banking and Financial Services</li>
                <li>Customer Communication</li>
                <li>Loan Collection Procedures</li>
                <li>Customer Relationship Management</li>
                <li>Professional Communication and Negotiation</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="projects-section section-shell">
          <div className="section-heading">
            <p className="section-kicker">05 / Featured project</p>
            <h2>A freelance website <span>built with purpose.</span></h2>
          </div>
          <div className="projects-content">
            <p className="section-description">Webora Technologies presents website services for small businesses, startups, creators, professionals, and local brands.</p>
            <div className="projects-grid">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-card-top">
                    <span className="project-number">0{project.id}</span>
                    <span className="project-open" aria-hidden="true">↗</span>
                  </div>
                  <div>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">
                    View project <span aria-hidden="true">↗</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="resume-section section-shell">
          <div className="resume-copy">
            <p className="section-kicker">06 / Resume</p>
            <h2>A little more <span>on paper.</span></h2>
            <p className="resume-intro">Explore my background, education, and the skills I bring to a team.</p>
          </div>
          <div className="resume-container">
            <div className="resume-preview">
              <span className="resume-file-icon" aria-hidden="true">PDF</span>
              <span><strong>Anish_Kumar_M_Resume</strong><small>Resume · PDF document</small></span>
              <span className="resume-file-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="resume-actions">
              <a href="resume.pdf" download="Anish_Kumar_M_Resume.pdf" className="resume-btn">
                Download resume <span aria-hidden="true">↓</span>
              </a>
              <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn-secondary">
                View PDF <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-shell">
          <div className="contact-top">
            <p className="section-kicker">07 / Get in touch</p>
            <h2>Have something in mind?<br /><span>Let's make it happen.</span></h2>
            <p className="contact-intro">I'm open to new opportunities, interesting projects, and good conversations.</p>
            <a className="contact-email" href="mailto:anishjogi10@gmail.com">anishjogi10@gmail.com <span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-details">
            {contactInfo.map(info => (
              info.link
                ? (
                  <a key={info.label} href={info.link} className="contact-card">
                    <span className="contact-icon">{info.icon}</span>
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </a>
                )
                : (
                  <div key={info.label} className="contact-card">
                    <span className="contact-icon">{info.icon}</span>
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                )
            ))}
          </div>
          <div className="social-section">
            <h3>Find me online</h3>
            <div className="social-links">
              {socialLinks.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-card">
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        </div>

        <footer className="footer">
          <a className="footer-brand" href="#home" onClick={event => navigateToSection(event, 'home')}>AK<span>.</span></a>
          <p>Designed &amp; built by Anish Kumar M</p>
          <a href="#home" className="back-to-top" onClick={event => navigateToSection(event, 'home')}>Back to top ↑</a>
        </footer>
      </aside>
    </main>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);