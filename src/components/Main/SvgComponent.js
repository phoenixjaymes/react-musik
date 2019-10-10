import React from 'react';
import PropTypes from 'prop-types';

const SvgComponent = ({ title }) => (
  <svg viewBox="0 0 400 110" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" style={{ fill: 'greenyellow', strokeWidth: 2, stroke: 'rgb(0,0,0)' }} />
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="red" fontSize="2rem">{title}</text>
  </svg>
);

SvgComponent.propTypes = {
  title: PropTypes.string,
};

export default SvgComponent;
