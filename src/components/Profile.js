import React from 'react';
import { Box, Card, CardContent, Typography, Divider, Tooltip } from '@mui/material';
import TokenTwoToneIcon from '@mui/icons-material/TokenTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GDCGladiatorIcon from './GDCGladiatorIcon';
import AnimatedBar from './AnimatedBar';
import HeatMap from './HeatMap';

function Profile() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        maxWidth: '1000px', // Limit the max width to center content
        paddingBottom: 4, // Add padding to the bottom of the page
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
          variant="outlined"
          sx={{
            borderRadius: "10px",
            height: "fit-content",
            flex: '1 1 30%',
            padding: 1,
            
          }}
        >
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AccountCircleTwoToneIcon sx={{ fontSize: '5rem' }} />
            <Typography fontFamily="mulish" variant="h5" component="div" align="center" sx={{ fontSize: '1.5em' }}> {/* Optional: adjust font size */}
              Your Name
            </Typography>
            <Typography fontFamily="mulish" variant="h6" align="center" gutterBottom sx={{ fontSize: '1.2em' }}> {/* Adjust font size */}
              Rank 1,337
            </Typography>
            <Typography fontFamily="mulish" variant="h6" align="center" sx={{ fontSize: '1.2em' }}> {/* Adjust font size */}
              <span style={{ fontSize: '1.4em', fontWeight: 'bold' }}>🔥 35</span> day streak
            </Typography>
            <Typography fontFamily="mulish" variant="h6" align="center" sx={{ fontSize: '1.2em' }}> {/* Adjust font size */}
              <span style={{ fontSize: '1.4em', fontWeight: 'bold' }}>54</span> quests completed
            </Typography>
            <Divider sx={{ width: '100%', margin: '10px' }} />
            <Typography fontFamily="mulish" variant="h6" marginBottom="10px">Showcase</Typography>
            <GDCGladiatorIcon tooltipText="Fall 2024 GDC Gladiator" sx={{ fontSize: '5rem' }} />
            <Tooltip title={<span style={{ fontSize: '1.2rem' }}>Top 5% All-Time Explorer</span>} placement="right" arrow>
              <TokenTwoToneIcon sx={{ fontSize: '5rem' }} />
            </Tooltip>
            <Tooltip title={<span style={{ fontSize: '1.2rem' }}>Winter 2023 3rd PCL Prodigy</span>} placement="right" arrow>
              <MilitaryTechIcon sx={{ fontSize: '5rem' }} />
            </Tooltip>
          </CardContent>
        </Card>

                {/* Map Card */}
        <Card
          variant="outlined"
          sx={{
            borderRadius: "10px",
            height: "fit-content",
            flex: '1 1 70%',
            aspectRatio: 1,
            padding: 2,
          }}
        >
          <CardContent>
            <Typography fontFamily="mulish" variant="h5" component="div" align="center">
              Campus Heat Map
            </Typography>
            <HeatMap />
          </CardContent>
        </Card>
      </Box>

      {/* Graph Card */}
      <Card
        variant="outlined"
        sx={{
          borderRadius: "10px",
          width: "100%",
          flex: '1 1 70%',
          padding: 1,
        }}
      >
        <CardContent>
          <Typography fontFamily="mulish" variant="h6" component="div">
            <span style={{ fontSize: '1.4em', fontWeight: 'bold' }}>20% </span> of your time is spent in the GDC
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between', // Add even spacing between bars
              width: '100%', // Full width for alignment
              gap: '10px', // Add space between each bar
            }}
          >
            <AnimatedBar max={20} percentage={20} rank={1} label={"GDC"} />
            <AnimatedBar max={20} percentage={15} rank={2} label={"AND"} />
            <AnimatedBar max={20} percentage={12} rank={3} label={"KIN"} />
            <AnimatedBar max={20} percentage={10} rank={4} label={"ETC"} />
            <AnimatedBar max={20} percentage={8} rank={5} label={"SZB"} />
            <AnimatedBar max={20} percentage={7} rank={6} label={"PCL"} />
            <AnimatedBar max={20} percentage={6} rank={7} label={"JES"} />
            <AnimatedBar max={20} percentage={5} rank={8} label={"CBA"} />
            <AnimatedBar max={20} percentage={4} rank={9} label={"WEL"} />
            <AnimatedBar max={20} percentage={3} rank={10} label={"BUR"} />
            <AnimatedBar max={20} percentage={3} rank={11} label={"RLM"} />
            <AnimatedBar max={20} percentage={2} rank={12} label={"FAC"} />
            <AnimatedBar max={20} percentage={2} rank={13} label={"CMA"} />
            <AnimatedBar max={20} percentage={1} rank={14} label={"HRC"} />
            <AnimatedBar max={20} percentage={1} rank={15} label={"UTC"} />
            <AnimatedBar max={20} percentage={1} rank={16} label={"PAR"} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Profile;
