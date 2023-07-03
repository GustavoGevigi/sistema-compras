import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Infnet. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  backgroundColor: '#f8f8f8',
  color: '#333',
  textAlign: 'center',
  padding: '20px',
};

export default Footer;
