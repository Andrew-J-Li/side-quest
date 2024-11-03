import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import utMap from '../images/ut-map.png'; // Import your map image

const heatmapData = [
  // Example data: [x, y, intensity]
  [10, 100, 0.5],  // Position (100, 100) with intensity 0.5
  [150, 150, 0.8],  // Position (150, 150) with intensity 0.8
  [200, 200, 0.2],  // Position (200, 200) with intensity 0.2
  // Add more data points here...
];

const HeatmapOverlay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the heatmap
    heatmapData.forEach(([x, y, intensity]) => {
      ctx.fillStyle = `rgba(255, 0, 0, ${intensity})`; // Red color with varying opacity
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2, true); // Draw circles for the heatmap
      ctx.fill();
    });
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <img 
        src={utMap} 
        alt="Campus Map" 
        style={{ width: '100%', height: 'auto', display: 'block' }} 
      />
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', // Keep absolute to overlay on image
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          pointerEvents: 'none', // Allow clicks to pass through to the map
        }} 
      />
    </Box>

  );
};

export default HeatmapOverlay;
