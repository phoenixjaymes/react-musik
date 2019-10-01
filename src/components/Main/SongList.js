import React from 'react';
import PropTypes from 'prop-types';

import SongsItem from './SongsItem';

const SongList = ({ data }) => {
  const songs = data.map(song => <SongsItem key={song.id} data={song} />);

  return (
    <ul className="list-unstyled">
      {songs}
    </ul>
  );
};

SongList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default SongList;
