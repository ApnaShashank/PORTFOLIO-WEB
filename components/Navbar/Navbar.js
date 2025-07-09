'use client';
import Link from 'next/link';
import './Navbar.css';
import ShinyText from '../ShinyText/ShinyText';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link href="#home">
          <ShinyText text="Shashank Gupta" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#mentors">Mentors</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar; 