import React from "react";
import "./SocialConnect.css";

const SocialConnect = () => (
  <div className="social-buttons">
    <a href="https://linkedin.com/in/shashank-gupta" className="social-button social-button--linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a href="https://github.com/shashank-gupta" className="social-button social-button--github" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </a>
    <a href="https://x.com/ApnaShashank" className="social-button social-button--twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://codepen.io/" className="social-button social-button--codepen" aria-label="CodePen" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-codepen"></i>
    </a>
  </div>
);

export default SocialConnect; 