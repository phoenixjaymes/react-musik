import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import GroupContainer from './GroupContainer';

const Songs = ({ context }) => {
  const { songGroups } = context;

  return (
    <Container as="section">
      <h1 className="text-center">Lieder</h1>
      <GroupContainer groups={songGroups} groupType="song" />
    </Container>
  );
};

Songs.propTypes = {
  context: PropTypes.shape(),
};

export default Songs;
