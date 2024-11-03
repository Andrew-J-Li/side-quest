import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const AnimatedBar = ({ max, percentage, rank, label }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 600 + rank * 60);
    return () => clearTimeout(timer);
  }, [rank]);

  const baseColor = 'rgb(71, 149, 208)';
  const hoverColor = 'rgb(93, 164, 217)';
  const bgColor = 'rgb(241, 245, 249)';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minWidth: '30px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          height: '250px',
          width: '100%',
          position: 'relative',
          borderRadius: '6px',
          overflow: 'visible',
          '&:hover': {
            '& .percentage-label': {
              opacity: 1,
              transform: 'translateX(-50%) translateY(0)',
            },
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background bar */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '100%',
            bgcolor: bgColor,
            borderRadius: '6px',
          }}
        />
        
        {/* Animated bar */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: isAnimated ? `${(percentage / max) * 100}%` : '0%',
            bgcolor: isHovered ? hoverColor : baseColor,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            borderRadius: '6px',
            transform: isHovered ? 'scaleX(1.03)' : 'scaleX(1)',
            boxShadow: isHovered 
              ? '0 8px 16px -4px rgba(71, 149, 208, 0.2), 0 2px 4px -1px rgba(71, 149, 208, 0.1)'
              : '0 4px 6px -1px rgba(71, 149, 208, 0.1)',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '20%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
              borderTopLeftRadius: '6px',
              borderTopRightRadius: '6px',
            }
          }}
        />

        {/* Percentage label (for all values) */}
        <Box
          className="percentage-label"
          sx={{
            position: 'absolute',
            left: '50%',
            bottom: `${(percentage / max) * 100}%`,
            transform: 'translateX(-50%) translateY(4px)',
            bgcolor: 'white',
            px: 1.5,
            py: 0.75,
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(71, 149, 208, 0.15)',
            opacity: 0,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              color: baseColor,
              fontSize: '0.85rem',
            }}
          >
            {percentage}%
          </Typography>
        </Box>
      </Box>

      {/* Label */}
      <Typography
        variant="body2"
        sx={{
          mt: 1.5,
          color: isHovered ? baseColor : 'text.secondary',
          transition: 'color 0.3s ease',
          fontFamily: 'inherit',
          fontWeight: percentage === max ? 600 : 400,
          fontSize: '0.875rem',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default AnimatedBar;