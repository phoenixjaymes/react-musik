import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import withContext from '../Context';

const ArtistsItem = ({ data }) => (
  <li className="item-list-li">
    <div className="item-list-li__img">
      <img
        width={50}
        height={50}
        src={`https://phoenixjaymes.com/assets/img/labs/music/${data.img}`}
        alt="Generic placeholder"
      />
    </div>

    <div className="item-list-li__data">
      <Link to={`/artist-albums/${data.id}`}>
        <span className="heading">{data.artist}</span>
      </Link>

      <br />

      <Link to={`/artist-albums/${data.id}`}>
        {data.numOfAlbums}
        {data.numOfAlbums > 1 ? ' Albums, ' : ' Album, '}
      </Link>

      {data.numOfSongs}
      {data.numOfSongs > 1 ? ' Songs' : ' Song'}
    </div>

    <div className="item-list-li__extra">
      <span>...</span>
    </div>
  </li>
);

ArtistsItem.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default withContext(ArtistsItem);
