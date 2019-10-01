import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import svgAdd from './add-outline.svg';

const SongsItem = ({ data }) => (
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
      <span className="heading">{data.title}</span>
      <br />
      <Link to={`/artist-albums/${data.artistId}`}>{data.artist}</Link>
    </div>

    <div className="item-list-li__extra">
      <span><img src={svgAdd} alt="add" /></span>
    </div>
  </li>
);

SongsItem.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default SongsItem;
