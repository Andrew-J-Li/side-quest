import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import TokenTwoToneIcon from '@mui/icons-material/TokenTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import AnimatedBar from './AnimatedBar';
import HeatMap from './HeatMap';

  function Profile() {
    const neonColor = 'rgba(0, 115, 186, 0.2)'; // Define your neon color here

    return (
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          padding: 4,
          maxWidth: '1000px', // Limit the max width to center content
          margin: '0 auto', // Center the box within the page
        }}
      >
        {/* Row for Profile and Map Card */}
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            gap: 4,
          }}
        >
            <Card
              sx={{
                borderRadius: "10px",
                height: "fit-content",
                flex: '1 1 30%',
                padding: 1,
                boxShadow: `0 0 5px ${neonColor}, 0 0 10px ${neonColor}, 0 0 15px ${neonColor}`,
                '&:hover': {
                  boxShadow: `0 0 10px ${neonColor}, 0 0 20px ${neonColor}, 0 0 30px ${neonColor}`,
                },
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <AccountCircleTwoToneIcon sx={{ fontSize: '5rem' }} />
                <Typography variant="h5" component="div" align="center" sx={{ fontSize: '1.5em' }}> {/* Optional: adjust font size */}
                Your Name
              </Typography>
              <Typography variant="h6" align="center" gutterBottom sx={{ fontSize: '1.2em' }}> {/* Adjust font size */}
                Rank 50,000
              </Typography>
              <Typography variant="h6" align="center" sx={{ fontSize: '1.2em' }}> {/* Adjust font size */}
                <span style={{ fontSize: '1.4em', fontWeight: 'bold'}}>🔥 15</span> day streak
              </Typography>
              <Typography variant="h6" align="center" sx={{ fontSize: '1.2em' }}> {/* Adjust font size */}
                <span style={{ fontSize: '1.4em', fontWeight: 'bold'}}>20</span> quests completed
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={1}> {/* Adjusted gap and margin */}
              <Typography>Showcase</Typography>
                <TokenTwoToneIcon sx={{ fontSize: '3rem' }} />
                <TokenTwoToneIcon sx={{ fontSize: '3rem' }} />
                <TokenTwoToneIcon sx={{ fontSize: '3rem' }} />
              </Box>
            </CardContent>
          </Card>

                    {/* Map Card */}
          <Card
            sx={{
              borderRadius: "10px",
              height: "fit-content",
              flex: '1 1 70%',
              aspectRatio: 1,
              padding: 2,
              boxShadow: `0 0 5px ${neonColor}, 0 0 10px ${neonColor}, 0 0 15px ${neonColor}`,
              '&:hover': {
                boxShadow: `0 0 10px ${neonColor}, 0 0 20px ${neonColor}, 0 0 30px ${neonColor}`,
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" align="center">
                Campus Heat Map
              </Typography>
              <HeatMap />
            </CardContent>
          </Card>
        </Box>

        {/* Graph Card */}
        <Card
          sx={{
            borderRadius: "10px",
            width: "100%",
            flex: '1 1 70%',
            padding: 1,
            boxShadow: `0 0 5px ${neonColor}, 0 0 10px ${neonColor}, 0 0 15px ${neonColor}`,
            '&:hover': {
              boxShadow: `0 0 20px ${neonColor}, 0 0 40px ${neonColor}, 0 0 45px ${neonColor}`,
            },
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              <span style={{ fontSize: '1.4em', fontWeight: 'bold'}}>24% </span> of your time was spent in GDC
            </Typography>
            <Box sx={{ display: "flex" }}>
              <AnimatedBar max={24} percentage={24} rank={1} label={"GDC"}/>
              <AnimatedBar max={24} percentage={20} rank={2} label={"AND"}/>
              <AnimatedBar max={24} percentage={18} rank={3} label={"KIN"}/>
              <AnimatedBar max={24} percentage={14} rank={4} label={"ETC"}/>
              <AnimatedBar max={24} percentage={10} rank={5} label={"SZB"}/>
              <AnimatedBar max={24} percentage={8} rank={6} label={"PCL"}/>
              <AnimatedBar max={24} percentage={4} rank={7} label={"JES"}/>
              <AnimatedBar max={24} percentage={2} rank={8} label={"CBA"}/>
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }

  export default Profile;
