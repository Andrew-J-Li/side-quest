import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const AnimatedBar = ({ max, percentage, rank, label }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 1000 + rank * 100); // Delay to ensure the animation is visible

    return () => clearTimeout(timer);
  }, [rank]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center', // Center items horizontally
        width: '100%',
        mt: 2,
      }}
    >
      <Box
        sx={{
          height: '250px', // Height of the graph area
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
      >
        <Box
          sx={{
            height: isAnimated ? `${(percentage / max) * 90}%` : '0%', // Animate from 0% to specified height
            width: '100%',
            background: isHovered ? 'rgba(196, 212, 224, 1)' : 'rgba(0, 115, 186, 1)',
            position: 'absolute',
            bottom: 0,
            transition: 'height 0.5s ease', // Smooth transition for height
          }}
        />
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{
            position: 'absolute',
            bottom: `${(percentage / max) * 90}%`, // Position the text above the bar
            left: '50%', // Center horizontally
            transform: 'translateX(-50%)', // Adjust for centering
            display: isHovered && isAnimated ? 'block' : 'none', // Show text only on hover and when animated
            color: '#000',
            fontFamily: 'Mulish, sans-serif',
          }}
          className="percentage-text"
        >
          {percentage}
        </Typography>
      </Box>
      <Typography
        component="div"
        align="center"
        sx={{
          fontFamily: 'Mulish, sans-serif',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default AnimatedBar;
