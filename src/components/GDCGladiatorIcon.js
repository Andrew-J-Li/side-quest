import React from 'react';
import PropTypes from 'prop-types';
import gdcGladiatorIcon from '../images/gdc-gladiator.png'; // Adjust path as needed
import { Box, Tooltip } from '@mui/material';

function GDCGladiatorIcon({ fontSize = 'inherit', color = 'inherit', sx = {}, tooltipText = "GDC Gladiator Badge" }) {
  const sizeMap = {
    small: '1.5rem',
    medium: '2rem',
    large: '2.5rem',
    inherit: '1em'
  };

  const iconSize = sizeMap[fontSize] || fontSize;

  return (
    tooltipText ? (
      <Tooltip title={<span style={{ fontSize: '1.2rem' }}>{tooltipText}</span>} placement="right" arrow>
        <Box
          component="img"
          src={gdcGladiatorIcon}
          alt="GDC Gladiator"
          sx={{
            width: iconSize,
            height: iconSize,
            color,
            display: 'inline-block',
            cursor: 'pointer', // Changes cursor to pointer on hover
            ...sx
          }}
        />
      </Tooltip>
    ) : (
      <Box
        component="img"
        src={gdcGladiatorIcon}
        alt="GDC Gladiator"
        sx={{
          width: iconSize,
          height: iconSize,
          color,
          display: 'inline-block',
          ...sx
        }}
      />
    )
  );
}

GDCGladiatorIcon.propTypes = {
  fontSize: PropTypes.oneOf(['small', 'medium', 'large', 'inherit']),
  color: PropTypes.string,
  sx: PropTypes.object,
  tooltipText: PropTypes.string
};

export default GDCGladiatorIcon;
