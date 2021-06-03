import { cloneElement } from 'react';
import { useScrollTrigger } from '@material-ui/core';
import PropTypes from 'prop-types';

const ElevationScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

ElevationScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ElevationScroll;
