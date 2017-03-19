import React, { PropTypes } from 'react';

export const InkBar = ({ left, width }) => <div className="Tabs__inkbar" style={{ left, width }} />;

export default InkBar;

InkBar.propTypes = {
  left: PropTypes.number,
  width: PropTypes.number,
};

InkBar.defaultProps = {
  left: 0,
  width: 0,
};
