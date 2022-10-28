
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      ESTI Groupe 8, all rights Reserved.
      <p style={{ marginTop: '2px' }}>
        Follow ESTI on {' '}
        <a href="https://www.linkedin.com/in/zain-sadaqat/">LinkedIn</a> and{' '}
        <a href="https://www.github.com/zainsadaqat/">GitHub</a> for more.
      </p>
    </footer>
  );
};

export default Footer;