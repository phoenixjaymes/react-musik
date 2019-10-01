import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

import '../../css/footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Navbar as="footer" bg="red" fixed="bottom" className="py-0 main-footer">
      <Container className="justify-content-center">
        <p className="mb-1 py-1">{`\u00A9 ${year} Musik`}</p>
      </Container>
    </Navbar>
  );
};

export default Footer;
