import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Jumbotron,
  Button,
} from 'react-bootstrap';

const Home = () => (
  <Container as="section" className="pt-0 pt-sm-2 pt-md-4">
    <Jumbotron className="jumbo">
      <h1 className="text-center">Lieblingslieder Listen</h1>
      <h4 className="text-center">
        Es tut mir Leid
        <br />
        Ich habe keine Listen gefunden.
      </h4>

      <p className="text-center">
        <Button variant="yellow" as={Link} to="/artists">MUSIKER</Button>
      </p>
    </Jumbotron>
  </Container>
);

export default Home;
