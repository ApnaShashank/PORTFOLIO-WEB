'use client';

import ChromaGrid from '../components/ChromaGrid/ChromaGrid';
import CircularText from '../components/CircularText/CircularText';
import ScrollVelocity from '../components/ScrollVelocity/ScrollVelocity';
import ShinyText from '../components/ShinyText/ShinyText';
import dynamic from 'next/dynamic';
import SocialConnect from "../components/SocialConnect/SocialConnect";

const SplineRobot = dynamic(() => import('../components/SplineRobot'), { ssr: false });

export default function Home() {
  // Data from user's request
  const introText =
    "Hi, I'm Shashank Gupta 👋 A passionate BCA student, aspiring full-stack web developer & AI enthusiast from India. I love building creative websites and exploring the world of Artificial Intelligence.";
  const aboutText =
    "Hi! I'm Shashank Gupta, a passionate and creative individual currently pursuing BCA (Bachelor of Computer Applications). I love exploring the world of technology, especially web development, artificial intelligence, and creative design. Over the past few years, I've been building my skills through hands - on projects, continuous learning, and staying updated with the latest tech trends.I believe in learning by doing, and I'm always up for new challenges. When I'm not coding or learning something new, you'll find me sharing knowledge, designing cool stuff, or creating content for social media.";
  const skills = [
    'Python • HTML • CSS • JavaScript',
    'ReactJS • Tailwind CSS • Bootstrap',
    'ChatGPT • Gemini • ElevenLabs • Leonardo AI',
    'Canva • VS Code • GitHub • Figma',
    'CapCut • VN Editor • InShot • D-ID',
  ];

  const projects = [
    {
      name: 'CertificateWallah',
      description: 'Internship website with AI features and animations.',
      link: '#', // Replace with actual link
    },
    {
      name: 'Offline Jarvis AI',
      description: 'Voice-controlled assistant without API key.',
      link: '#', // Replace with actual link
    },
    {
      name: 'Python Health Tracker App',
      description: 'Tracks calories, steps & gives health tips.',
      link: '#', // Replace with actual link
    },
  ];

  // Placeholder data for mentors
  const mentors = [
    {
      image: "/codewithharry.png",
      title: "Harry Bhaiya",
      subtitle: "Programming & Web Dev",
      handle: "@CodeWithHarry",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://www.youtube.com/c/CodeWithHarry"
    },
    {
      image: "/apnacollege.png",
      title: "Shradha Khapra",
      subtitle: "DSA & Coding",
      handle: "@ApnaCollege",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://www.youtube.com/c/ApnaCollegeOfficial"
    },
    {
      image: "/codeaurchai.png",
      title: "Hitesh Choudhary",
      subtitle: "Code & Chai",
      handle: "@hiteshchoudhary",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://www.youtube.com/c/HiteshChoudhary"
    },
  ];

  return (
    <>
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 100 }}>
        <CircularText text=" ✦ Scroll Down ✦ Scroll Down " />
      </div>

      <main>
        <section id="home" className="hero-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', padding: 0, marginTop: '80px' }}>
          {/* Top: Profile Image and Name in a row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', padding: 0 }}>
            {/* Profile Image (Larger) */}
            <div style={{ width: 240, height: 240, borderRadius: '50%', overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 0 30px #0008', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
              <img src="/profile_shashank.png" alt="Shashank Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Name (single line) */}
            <ShinyText className="name" text="Shashank Gupta" />
          </div>
          {/* Intro text below name */}
          <p className="intro-text" style={{ textAlign: 'center', maxWidth: 600, marginTop: '1.5rem', marginLeft: 0, marginRight: 0 }}>{introText}</p>
          {/* Spline 3D Robot directly below intro text, small size */}
          <SplineRobot />
        </section>

        <section id="about">
          <h2 className="section-title">
            <ShinyText text="About Me" />
          </h2>
          <p>{aboutText}</p>
        </section>

        {/* Skills Section - replaced with new grid */}
        <section id="skills">
          <div className="skills-section">
            <div className="skills-header">
              <h1>Skills</h1>
            </div>
            <div className="skills-container">
              <div className="skills-box">
                <div className="skills-title">
                  <div className="skills-img">
                    <img src="/html.png" alt="HTML 5" className="skills-icons" />
                  </div>
                  <h3>HTML 5</h3>
                </div>
                <p>Lorem  Lorem  Lorem</p>
              </div>
              <div className="skills-box">
                <div className="skills-title">
                  <div className="skills-img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="CSS3" className="skills-icons" />
                  </div>
                  <h3>CSS3</h3>
                </div>
                <p>Lorem  Lorem  Lorem</p>
              </div>
              <div className="skills-box">
                <div className="skills-title">
                  <div className="skills-img">
                    <img src="/javascript.png" alt="JavaScript" className="skills-icons" />
                  </div>
                  <h3>JAVASCRIPT</h3>
                </div>
                <p>Lorem  Lorem  Lorem</p>
              </div>
              <div className="skills-box">
                <div className="skills-title">
                  <div className="skills-img">
                    <img src="/python.png" alt="Python" className="skills-icons" />
                  </div>
                  <h3>PYTHON</h3>
                </div>
                <p>Lorem  Lorem  Lorem</p>
              </div>
              <div className="skills-box">
                <div className="skills-title">
                  <div className="skills-img">
                    <img src="/vscode.png" alt="VS Code" className="skills-icons" />
                  </div>
                  <h3>VS CODE</h3>
                </div>
                <p>Lorem  Lorem  Lorem</p>
              </div>
              <div className="skills-box">
                <div className="skills-title">
                  <div className="skills-img">
                    <img src="/cursor.png" alt="Cursor AI" className="skills-icons" />
                  </div>
                  <h3>CURSOR AI</h3>
                </div>
                <p>Lorem  Lorem  Lorem</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2 className="section-title">
            <ShinyText text="My Projects" />
          </h2>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <div key={i} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="mentors" className="mentors-section">
          <h2 className="section-title">
            <ShinyText text="My Mentors" />
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#ccc' }}>Here are some of the amazing people I've learned from.</p>
          <ChromaGrid items={mentors} radius={400} />
        </section>

        <section id="contact">
          <h2 className="section-title">
            <ShinyText text="Get In Touch" />
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#ccc' }}>
            Feel free to reach out. Let's connect!
          </p>
          <div className="contact-links">
            <a className="contact-link" href="mailto:shashank8808108802@gmail.com">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,6 12,13 2,6" /></svg>
              <span style={{ marginLeft: 8 }}>shashank8808108802@gmail.com</span>
            </a>
            <SocialConnect />
          </div>
        </section>
      </main>
    </>
  );
}