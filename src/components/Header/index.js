import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Navbar,
} from 'react-bootstrap';

import withContext from '../Context';

import '../../css/header.css';

const Header = ({ context }) => {
  const { actions } = context;
  const { setGroupToOpen } = actions;

  return (
    <Navbar as="header" className="main-header p-1" fixed="top" bg="red" expand="xs">
      <Container className="p-0">

        <nav onClick={() => setGroupToOpen('')} role="presentation">
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
};

Header.propTypes = {
  context: PropTypes.shape(),
};

export default withContext(Header);
