import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import GroupContainer from './GroupContainer';

const Artists = ({ context }) => {
  const { artistGroups } = context;

  return (
    <Container as="section">
      <h1 className="text-center">Musiker</h1>
      <GroupContainer groups={artistGroups} groupType="artist" />
    </Container>
  );
};

Artists.propTypes = {
  context: PropTypes.shape(),
};

export default Artists;
