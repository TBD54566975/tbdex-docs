import React from 'react';
import PropTypes from 'prop-types';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function Web5Url({ to, children, ...props }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const web5DocsBaseUrl = customFields?.WEB5_DOCS_BASE_URL || '';

  const fullUrl = `${web5DocsBaseUrl}${to}`;

  return (
    <Link to={fullUrl} {...props}>
      {children}
    </Link>
  );
}

Web5Url.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Web5Url.defaultProps = {
  children: null,
};
