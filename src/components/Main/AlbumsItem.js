import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AlbumsItem = ({ data }) => (
  <li className="item-list-li">
    <div className="item-list-li__img">
      <img
        width={50}
        height={50}
        src={`http://phoenixjaymes.com/assets/img/labs/music/${data.img}`}
        alt="Generic placeholder"
      />
    </div>

    <div className="item-list-li__data">
      <Link to={`/albums-single/${data.id}`}>
        <span className="heading">{data.title}</span>
      </Link>
      <br />
      <Link to={`/artist-albums/${data.artistId}`}>{data.artist}</Link>
      <br />
      {data.numOfSongs}
      {data.numOfSongs > 1 ? ' Songs' : ' Song' }
    </div>

    <div className="item-list-li__extra">
      <span>...</span>
    </div>
  </li>
);

AlbumsItem.propTypes = {
  data: PropTypes.shape({
    artist: PropTypes.string,
    artistId: PropTypes.string,
    format: PropTypes.string,
    id: PropTypes.string,
    img: PropTypes.string,
    numOfSongs: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default AlbumsItem;
