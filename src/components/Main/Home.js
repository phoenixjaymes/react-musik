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
      <h1 className="text-center">Musik</h1>
      <p>
        Ich habe viel Musik in meine Sammlung. Ich mag alle Musikrichtungen vom Country zum Heavy Metal. Aber meine lieblingsmusik ist von der 80s, Depeche Mode, Erasure, Pet Shop Boys, Madonna, Janet Jackson und andere. Ich liebe auch Reba McEntire, George Strait, Rammstein, Rosentolz, Max Giesinger und Johannes Oerding. Dieses ist ein Datenbankinventar von meine Sammlung.
      </p>
      <p className="text-center">
        <Button variant="yellow" as={Link} to="/artists">MUSIKER</Button>
      </p>
    </Jumbotron>
  </Container>
);

export default Home;
