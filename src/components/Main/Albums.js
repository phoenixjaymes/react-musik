import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import GroupContainer from './GroupContainer';

const Albums = ({ context }) => {
  const { albumGroups } = context;

  return (
    <Container as="section">
      <h1 className="text-center">Alben</h1>
      <GroupContainer groups={albumGroups} groupType="album" />
    </Container>
  );
};

Albums.propTypes = {
  context: PropTypes.shape(),
};

export default Albums;
