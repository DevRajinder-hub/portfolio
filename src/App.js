import React, { useState, useEffect } from 'react';
import './Windows10Portfolio.css';
import { Notification, Modal, useNotification, useModal } from './PopupComponents';

const App = () => {
  const [time, setTime] = useState(new Date());
  const [activeWindow, setActiveWindow] = useState(null);
  const [openWindows, setOpenWindows] = useState([]);
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [maximizedWindows, setMaximizedWindows] = useState([]);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [windowPositions, setWindowPositions] = useState({});
  
  const { notifications, showNotification, closeNotification, NotificationContainer } = useNotification();
  const { openModal, closeModal, getModalProps } = useModal();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);
  const closeCurrentTab = () => {
    window.open("about:blank", "_self"); 
    window.close(); 
  };
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setTimeout(() => {
        showNotification({
          title: 'Welcome to My Portfolio',
          message: 'Double-click on any desktop icon to explore my work and experience.',
          autoClose: false,
          actions: [
            { label: 'Get Started', onClick: () => openWindow('about') },
            { label: "Don't show again", secondary: true, onClick: () => localStorage.setItem('hasVisited', 'true') }
          ]
        });
      }, 1500);
    }
  }, []);

  const desktopIcons = [
    { id: 'about', title: 'About Me', icon: '🧑‍' },
    { id: 'projects', title: 'Projects', icon: '📁' },
    { id: 'skills', title: 'Skills', icon: '🛠️' },
    { id: 'contact', title: 'Contact', icon: '✉️' },
    { id: 'resume', title: 'Resume', icon: '📄' }
  ];

 // Window content data
  const windowContent = {
    about: (
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p className="text-content">
          Hi there! I'm <strong>Rajinder Kumar</strong>, a seasoned <strong>Shopify Developer</strong> with over <strong>6 years of experience</strong> in building high-performing eCommerce websites.
        </p>
        <p className="text-content">
          I specialize in creating custom Shopify themes, optimizing store performance, and integrating advanced functionalities to enhance user experience and drive conversions.
        </p>
        <p className="text-content">
          With a strong background in <strong>Shopify Liquid, JavaScript, and modern web technologies</strong>, I have successfully helped businesses scale their online presence with seamless, responsive, and conversion-driven Shopify stores.
        </p>
        <button className="submit-button" onClick={() => openModal('contactMe')}>
          Get In Touch
        </button>
      </div>
    ),
   projects: (
      <div className="projects-content">
        <h2 className="section-title">My Projects</h2>
        <div className="project-grid">
          <div className="project-card">

            <p className="project-description">
			<div class="project-description">
    <h2>Luna & Rose – Shopify Store Enhancements</h2>
    <p>
        I worked on improving various pages of the <strong>Luna & Rose</strong> Shopify store, focusing on multiple aspects to enhance the overall user experience, performance, and design aesthetics.
    </p>
	<br/>
    <h3>Key Areas of Improvement:</h3>
    
    <div class="project-section">
        <h4>📌 Page Customizations</h4>
        <p>Enhanced layouts, typography, and styling to create a more cohesive brand experience. Applied design refinements to improve visual appeal and consistency across different pages.</p>
    </div>

    <div class="project-section">
        <h4>📌 User Experience (UX) Optimization</h4>
        <p>Revamped navigation structure for seamless browsing. Optimized product pages to enhance engagement, improve readability, and ensure smooth mobile responsiveness.</p>
    </div>

    <div class="project-section">
        <h4>📌 Performance Enhancements</h4>
        <p>Optimized page load times by refining code structure, reducing unnecessary assets, and implementing best practices for a smoother and faster shopping experience.</p>
    </div>

    <div class="project-section">
        <h4>📌 Shopify Theme Adjustments</h4>
        <p>Customized theme sections to align with branding requirements and functional improvements. Integrated tailored elements to maintain the store’s unique identity.</p>
    </div>

    <p>
        Through these enhancements, the **Luna & Rose** Shopify store now offers a more visually appealing, high-performing, and user-friendly experience.
    </p>
</div>
			
			</p>
            <a href="https://lunaandrose.co/" className="project-link" onClick={(e) => {
              e.preventDefault();
              showNotification({
                title: 'Project Details',
                message: 'Loading project information...',
                autoClose: true
              });
              setTimeout(() => {
                openModal('projectDetails', { project: 'lunaandrose' });
              }, 1000);
            }}>View Project</a>
          </div>
          <div className="project-card">
             <p className="project-description">
			<div class="project-description">
    <h2>Luna & Rose – Shopify Store Enhancements</h2>
    <p>
        I worked on improving various pages of the <strong>Luna & Rose</strong> Shopify store, focusing on multiple aspects to enhance the overall user experience, performance, and design aesthetics.
    </p>
	<br/>
    <h3>Key Areas of Improvement:</h3>
    
    <div class="project-section">
        <h4>📌 Page Customizations</h4>
        <p>Enhanced layouts, typography, and styling to create a more cohesive brand experience. Applied design refinements to improve visual appeal and consistency across different pages.</p>
    </div>

    <div class="project-section">
        <h4>📌 User Experience (UX) Optimization</h4>
        <p>Revamped navigation structure for seamless browsing. Optimized product pages to enhance engagement, improve readability, and ensure smooth mobile responsiveness.</p>
    </div>

    <div class="project-section">
        <h4>📌 Performance Enhancements</h4>
        <p>Optimized page load times by refining code structure, reducing unnecessary assets, and implementing best practices for a smoother and faster shopping experience.</p>
    </div>

    <div class="project-section">
        <h4>📌 Shopify Theme Adjustments</h4>
        <p>Customized theme sections to align with branding requirements and functional improvements. Integrated tailored elements to maintain the store’s unique identity.</p>
    </div>

    <p>
        Through these enhancements, the **Luna & Rose** Shopify store now offers a more visually appealing, high-performing, and user-friendly experience.
    </p>
</div>
			
			</p>
            <a href="#" className="project-link" onClick={(e) => {
              e.preventDefault();
              openModal('projectDetails', { project: 'Project 2' });
            }}>View Project</a>
          </div>
          <div className="project-card">
             <p className="project-description">
			<div class="project-description">
    <h2>Luna & Rose – Shopify Store Enhancements</h2>
    <p>
        I worked on improving various pages of the <strong>Luna & Rose</strong> Shopify store, focusing on multiple aspects to enhance the overall user experience, performance, and design aesthetics.
    </p>
	<br/>
    <h3>Key Areas of Improvement:</h3>
    
    <div class="project-section">
        <h4>📌 Page Customizations</h4>
        <p>Enhanced layouts, typography, and styling to create a more cohesive brand experience. Applied design refinements to improve visual appeal and consistency across different pages.</p>
    </div>

    <div class="project-section">
        <h4>📌 User Experience (UX) Optimization</h4>
        <p>Revamped navigation structure for seamless browsing. Optimized product pages to enhance engagement, improve readability, and ensure smooth mobile responsiveness.</p>
    </div>

    <div class="project-section">
        <h4>📌 Performance Enhancements</h4>
        <p>Optimized page load times by refining code structure, reducing unnecessary assets, and implementing best practices for a smoother and faster shopping experience.</p>
    </div>

    <div class="project-section">
        <h4>📌 Shopify Theme Adjustments</h4>
        <p>Customized theme sections to align with branding requirements and functional improvements. Integrated tailored elements to maintain the store’s unique identity.</p>
    </div>

    <p>
        Through these enhancements, the **Luna & Rose** Shopify store now offers a more visually appealing, high-performing, and user-friendly experience.
    </p>
</div>
			
			</p>
            <a href="#" className="project-link" onClick={(e) => {
              e.preventDefault();
              openModal('projectDetails', { project: 'Project 3' });
            }}>View Project</a>
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="skills-content">
        <h2 className="section-title">Skills</h2>
        <div className="skills-category">
          <h3 className="section-subtitle">Programming Languages</h3>
          <div className="skills-list">
            <span className="skill-tag">Shopify</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">PHP</span>
          </div>
        </div>
      <div className="skills-category">
          <h3 className="section-subtitle">Frameworks & Libraries</h3>
          <div className="skills-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express</span>
            <span className="skill-tag">TailwindCSS</span>
          </div>
        </div>
        <div className="skills-category">
          <h3 className="section-subtitle">Tools & Platforms</h3>
          <div className="skills-list">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Figma</span>
          </div>
        </div>
      </div>
    ),
    contact: (
      <div className="contact-content">
        <h2 className="section-title">Contact Me</h2>
        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          showNotification({
            title: 'Message Sent',
            message: 'Thank you for your message! I will get back to you soon.',
            autoClose: true
          });
        }}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-input" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea className="form-textarea" placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    ),
    resume: (
     <div class="resume-container">
    <div class="resume-header">
        <h2>Rajinder Kumar</h2>
        <p>Shopify Developer | React | Node.js</p>
    </div>

    <div class="resume-section personal-info">
        <h3>Personal & Contact Information</h3>
        <p><strong>Name:</strong> Rajinder Kumar</p>
        <p><strong>Father's Name:</strong> Sh. Munna</p>
        <p><strong>Date of Birth:</strong> 15 June, 1993</p>
        <p><strong>Address:</strong> #2507, Sector-25, Chandigarh</p>
        <p><strong>Email:</strong> <a href="mailto:dev.rajindershopify@gmail.com">dev.rajindershopify@gmail.com</a></p>
        <p><strong>Mobile No:</strong> 9779382507</p>
    </div>

    <div class="resume-section">
        <h3>Objective</h3>
        <p>I want to best utilize my skills and potential to achieve a challenging position in the software industry and fulfill organizational goals.</p>
    </div>

    <div class="resume-section">
        <h3>Education</h3>
        <div class="timeline-item">
            <p class="timeline-title">Bachelor of Computer Application</p>
            <p>Punjab University, Chandigarh (2011 – 2014)</p>
            <p class="timeline-date">First Division (67.73%)</p>
        </div>
        <div class="timeline-item">
            <p class="timeline-title">Intermediate</p>
            <p>Govt. Model Senior Secondary School, Sector 37/B, Chandigarh</p>
            <p class="timeline-date">First Division (80.6%)</p>
        </div>
        <div class="timeline-item">
            <p class="timeline-title">High School</p>
            <p>Govt. High School, Sector 35, Chandigarh</p>
            <p class="timeline-date">First Division (74.8%)</p>
        </div>
    </div>

    <div class="resume-section">
        <h3>Programming Skills</h3>
        <div class="skills-list">
            <span class="skill-item">JQUERY</span>
            <span class="skill-item">CSS</span>
            <span class="skill-item">CORE PHP</span>
            <span class="skill-item">MYSQL</span>
            <span class="skill-item">SHOPIFY</span>
            <span class="skill-item">LARAVEL</span>
            <span class="skill-item">NODE.JS</span>
            <span class="skill-item">REACT</span>
        </div>
		
    </div>

    <div class="resume-section">
        <h3>Work Experience</h3>
        <div class="timeline-item">
            <p class="timeline-title">Shopify Developer</p>
            <p>Cybergineer Solution</p>
            <p class="timeline-date">2018 - Present (6 Years Experience)</p>
            <p>Specialized in Shopify development, with additional expertise in React and Node.js.</p>
        </div>
    </div>

    <a href="#" class="download-button">Download Full Resume</a>
</div>

    )
  };

  const openWindow = (id) => {
    if (!openWindows.includes(id)) {
      setOpenWindows([...openWindows, id]);
      setWindowPositions(prev => ({
        ...prev,
        [id]: { x: 100 + openWindows.length * 20, y: 50 + openWindows.length * 20 }
      }));
    }
    setMinimizedWindows(minimizedWindows.filter(w => w !== id));
    setMaximizedWindows(maximizedWindows.filter(w => w !== id));
    setActiveWindow(id);
    setStartMenuOpen(false);
  };

  const closeWindow = (id, e) => {
    e.stopPropagation();
    setOpenWindows(openWindows.filter(windowId => windowId !== id));
    setMinimizedWindows(minimizedWindows.filter(windowId => windowId !== id));
    setMaximizedWindows(maximizedWindows.filter(windowId => windowId !== id));
    setActiveWindow(openWindows.length > 1 ? openWindows.filter(w => w !== id)[0] : null);
  };

  const minimizeWindow = (id, e) => {
    e.stopPropagation();
    setMinimizedWindows([...minimizedWindows, id]);
    setActiveWindow(openWindows.length > 1 ? openWindows.filter(w => w !== id)[0] : null);
  };

  const maximizeWindow = (id, e) => {
    e.stopPropagation();
    if (maximizedWindows.includes(id)) {
      setMaximizedWindows(maximizedWindows.filter(windowId => windowId !== id));
    } else {
      setMaximizedWindows([...maximizedWindows, id]);
      setMinimizedWindows(minimizedWindows.filter(windowId => windowId !== id));
    }
    setActiveWindow(id);
  };

  const restoreWindow = (id) => {
    setMinimizedWindows(minimizedWindows.filter(windowId => windowId !== id));
    setActiveWindow(id);
  };

  const handleDragStart = (e, windowId) => {
    if (e.target.closest('.window-controls') || maximizedWindows.includes(windowId)) return;
    
    setActiveWindow(windowId);
    const initialX = e.clientX - (windowPositions[windowId]?.x || 0);
    const initialY = e.clientY - (windowPositions[windowId]?.y || 0);

    const handleMouseMove = (moveEvent) => {
      const newX = moveEvent.clientX - initialX;
      const newY = moveEvent.clientY - initialY;
      
      setWindowPositions(prev => ({
        ...prev,
        [windowId]: { x: Math.max(0, newX), y: Math.max(0, newY) }
      }));
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const toggleStartMenu = (e) => {
    e.preventDefault();
    setStartMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (startMenuOpen && !e.target.closest('.start-menu') && !e.target.closest('.start-button')) {
        setStartMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [startMenuOpen]);

  return (
    <div className="h-screen flex flex-col bg-blue-100 overflow-hidden">
      <div className="flex-1 p-4 relative background-image">
        <div className="grid grid-cols-1 gap-6 icons-space">
          {desktopIcons.map((icon) => (
            <div 
              key={icon.id}
              className="desktop-icon flex flex-col items-center cursor-pointer p-2"
              onDoubleClick={() => openWindow(icon.id)}
            >
              <div className="desktop-icon-image">{icon.icon}</div>
              <div className="desktop-icon-text">{icon.title}</div>
            </div>
          ))}
        </div>

        {openWindows.map((windowId) => {
          if (minimizedWindows.includes(windowId)) return null;
          
          const position = windowPositions[windowId] || { x: 100, y: 50 };
          const isMaximized = maximizedWindows.includes(windowId);
          const defaultWidth = Math.min(window.innerWidth * 0.8, 800);
          const defaultHeight = Math.min(window.innerHeight * 0.8, 600);

          return (
            <div
              key={windowId}
              className={`window absolute flex flex-col ${activeWindow === windowId ? 'active' : 'window-inactive'} ${isMaximized ? 'maximized' : ''}`}
              onMouseDown={(e) => handleDragStart(e, windowId)}
              onClick={() => setActiveWindow(windowId)}
              style={{
                top: isMaximized ? 40 : position.y,
                left: isMaximized ? 0 : position.x,
                width: isMaximized ? '100%' : defaultWidth,
                height: isMaximized ? 'calc(100% - 48px)' : defaultHeight,
                zIndex: activeWindow === windowId ? 20 : 10,
                transform: isMaximized ? 'none' : 'translate(0, 0)'
              }}
            >
              <div className="window-title-bar px-4 py-2 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="mr-2 text-lg">{desktopIcons.find(icon => icon.id === windowId)?.icon}</span>
                  <span className="window-title">{desktopIcons.find(icon => icon.id === windowId)?.title}</span>
                </div>
                <div className="window-controls flex">
                  <button 
                    className="w-6 h-6 flex items-center justify-center minimize-btn"
                    onClick={(e) => minimizeWindow(windowId, e)}
                  >
                    ─
                  </button>
                  <button 
                    className="w-6 h-6 flex items-center justify-center maximize-btn"
                    onClick={(e) => maximizeWindow(windowId, e)}
                  >
                    {isMaximized ? '🗗' : '□'}
                  </button>
                  <button
                    className="w-6 h-6 flex items-center justify-center close-btn"
                    onClick={(e) => closeWindow(windowId, e)}
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="window-content flex-1 overflow-auto">
                {windowContent[windowId]}
              </div>
            </div>
          );
        })}
      </div>

      <div className="taskbar h-12 flex items-center px-2 z-30">
        <div className="start-recent">
          <button 
            className="start-button p-2 hover:bg-gray-700 transition-colors" 
            onClick={toggleStartMenu}
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/88px-Windows_logo_-_2012.svg.png?20220903072431" 
              alt="Start" 
              className="w-6 h-6"
            />
          </button>
          
          <div className="flex-1 flex task-flex">
            {openWindows.map((windowId) => (
              <button
                key={windowId}
                className={`taskbar-item ${activeWindow === windowId ? 'active' : ''} ${minimizedWindows.includes(windowId) ? 'minimized' : ''}`}
                onClick={() => minimizedWindows.includes(windowId) ? restoreWindow(windowId) : setActiveWindow(windowId)}
              >
                <span className="taskbar-item-icon">{desktopIcons.find(icon => icon.id === windowId)?.icon}</span>
                <span className="taskbar-item-text text-white text-sm truncate max-w-xs">
                  {desktopIcons.find(icon => icon.id === windowId)?.title}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="start-right">
          <div className="taskbar-right">
            <div className="time">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      </div>

      {startMenuOpen && (
        <div className="start-menu absolute bottom-12 left-0 w-64 bg-gray-800 text-white shadow-lg z-40">
          <div className="start-menu-header p-4 border-b border-gray-700">
            <div className="start-menu-header-title">Rajinder Kumar</div>
            <div className="start-menu-header-subtitle text-sm">Full Stack Developer</div>
          </div>
          
          <div className="start-menu-items p-2">
            {desktopIcons.map((icon) => (
              <div 
                key={icon.id}
                className="start-menu-item flex items-center p-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => openWindow(icon.id)}
              >
                <span className="start-menu-item-icon mr-2">{icon.icon}</span>
                <span className="start-menu-item-text">{icon.title}</span>
              </div>
            ))}
          </div>
          
          <div className="start-menu-footer p-2 border-t border-gray-700">
    <div 
      className="start-menu-item flex items-center p-2 hover:bg-gray-700 cursor-pointer"
      onClick={closeCurrentTab}
    >
      <span className="start-menu-item-icon mr-2">🔌</span>
      <span className="start-menu-item-text">Power</span>
    </div>
  </div>
		  
        </div>
      )}

      <NotificationContainer />
    </div>
  );
};

export default App;