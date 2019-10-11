import React from 'react';
import PropTypes from 'prop-types';

const SvgComponent = ({ title }) => (
  <div className="svg-banner">
    <svg viewBox="0 0 700 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gradient">
          <stop offset="0%" stopColor="#000" />
          <stop offset="50%" stopColor="#000" />
          <stop offset="100%" stopColor="#b00" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#gradient)" style={{ strokeWidth: 2, stroke: 'rgb(0,0,0)' }} />
      <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="3rem" fontFamily="Arial, Helvetica, sans-serif">{title}</text>
    </svg>
  </div>
);

SvgComponent.propTypes = {
  title: PropTypes.string,
};

export default SvgComponent;
