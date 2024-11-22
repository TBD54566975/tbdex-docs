import React from 'react';
import PropTypes from 'prop-types';

const Web5Url = ({ to, children }) => {
  const baseUrl = 'http://web5_url_here/web5';
  const fullUrl = `${baseUrl}${to}`;

  return (
    <a href={fullUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

Web5Url.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Web5Url;
