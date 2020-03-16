import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

const Layout = ({ children, className }) => {
  return (
    <React.Fragment>
      <main className="main">
        {children}
      </main>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: '',
};

export default Layout;