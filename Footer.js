import React from 'react';
import './Footer.css'; // Assuming you have a corresponding CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Mcookie</h3>
        <p>Building creativity and confidence in children through coding.</p>
        <ul className="socials">
          <li><a href="https://www.linkedin.com/company/mcookie/?viewAsMember=true">LinkedIn</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Mcookie. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;