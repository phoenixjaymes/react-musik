import React from 'react';
import { Container } from 'react-bootstrap';

const LoadingError = () => (
  <Container as="main">
    <h2>Unable to Load Page</h2>
    <p>We&apos;re sorry! Please try again.</p>
  </Container>
);

export default LoadingError;
