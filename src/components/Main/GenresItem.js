import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GenresItem = ({ data }) => (
  <li className="item-list-li">
    <Link to="/genre-albums">
      <img
        width={50}
        height={50}
        className="mr-3"
        src="http://phoenixjaymes.com/assets/img/labs/music/placeholder-artist-64.png"
        alt="Generic placeholder"
      />

      <p>
        {data.name}
        <br />
        {data.numOfAlbums}
        {data.numOfAlbums > 1 ? 'Albums, ' : 'Album, ' }
        {data.numOfSongs}
        {data.numOfSongs > 1 ? 'Songs' : 'Song' }
      </p>
    </Link>

    <div><span>...</span></div>
  </li>
);

GenresItem.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default GenresItem;
