import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import GroupContainer from './GroupContainer';
import ArtistAlbumsTest from './ArtistsAlbumsTest';

const Artists = ({ context }) => {
  const { artistGroups, showDetails, showDetailsId } = context;

  return (
    <Container as="section">
      <h1 className="text-center">Musiker</h1>
      <GroupContainer groups={artistGroups} groupType="artist" />

      { showDetails === true && (
        <div className="music-details">
          <span onClick={context.actions.showDetailsModal}>+++</span>
          <ArtistAlbumsTest type="all" id={showDetailsId} />
        </div>
      )}

    </Container>
  );
};

Artists.propTypes = {
  context: PropTypes.shape(),
};

export default Artists;
