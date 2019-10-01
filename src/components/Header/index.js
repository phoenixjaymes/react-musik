import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Navbar,
} from 'react-bootstrap';

import '../../css/header.css';

const Header = () => (
  <Navbar as="header" className="main-header p-1" fixed="top" bg="red" expand="xs">
    <Container className="p-0">

      <nav>
        <ul className="utilities">
          <li><NavLink to="/" exact>Musik</NavLink></li>
          <li>&nbsp;</li>
          <li><span>Filtern</span></li>
        </ul>
        <ul className="menu">
          <li><NavLink to="/favs-lists" exact>Listen</NavLink></li>
          <li><NavLink to="/artists">Musiker</NavLink></li>
          <li><NavLink to="/albums">Alben</NavLink></li>
          <li><NavLink to="/genres">Genres</NavLink></li>
          <li><NavLink to="/songs">Lieder</NavLink></li>
        </ul>
      </nav>
    </Container>
  </Navbar>
);

export default Header;
