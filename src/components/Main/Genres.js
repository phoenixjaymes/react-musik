import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import GroupContainer from './GroupContainer';

const Genres = ({ context }) => {
  const { genreGroups } = context;

  return (
    <Container as="section">
      <h1 className="text-center">Genres</h1>
      <GroupContainer groups={genreGroups} groupType="genre" />
    </Container>
  );
};

Genres.propTypes = {
  context: PropTypes.shape(),
};

export default Genres;
