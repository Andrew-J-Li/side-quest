import React from 'react';
import { Box, Card, CardContent, Typography, Divider, Tooltip } from '@mui/material';
import TokenTwoToneIcon from '@mui/icons-material/TokenTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import GDCGladiatorIcon from './GDCGladiatorIcon';
import AnimatedBar from './AnimatedBar';
import HeatMap from './HeatMap';
import { Flame, Scroll, Droplets, Ghost, Footprints } from 'lucide-react';


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
          gap: 2,
        }}
      >
       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}> 
        <Card
          variant="outlined"
          sx={{
            borderRadius: "10px",
            height: "fit-content",
            flex: '1 1 0',
            padding: 1,
            marginBottom: '0'
          }}
        >

          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', padding: 0}}>
   
            <div style={{display: 'flex'}}>
              <AccountCircleTwoToneIcon sx={{ fontSize: '5rem'}} />
              <div style={{marginLeft: '10px', color: 'black'}}>
                <Typography fontFamily="mulish" variant="h5" component="div" align="left" 
                sx={{ fontSize: '1.5em', pt: 1.5, flexGrow: 1}}>
                  <b>Zafir Nasim</b>
                </Typography>
                <Typography fontFamily="mulish" variant="h6" align="left" gutterBottom sx={{ fontSize: '15px' }}>
                  Rank: <b>1,337</b>
                </Typography>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid black', marginLeft: "5%", margin: '10px 10px', width: "90%"}} />

            <Typography
              fontFamily="mulish"
              variant="h6"
              align="left"
              sx={{ fontSize: '1.2em', display: 'flex', alignItems: 'left', justifyContent: 'left', marginLeft: '3px'}}
            >
              <div>
                <Flame color="orange" size={30} style={{ marginRight: '5px' }} />
                <span style={{ fontSize: '1.4em', fontWeight: 'bold' }}>35</span> day streak
              </div>
            </Typography>

            <Typography fontFamily="mulish" variant="h6" align="left" sx={{ fontSize: '1.2em', marginLeft: '3px', display: 'flex'}}> {/* Adjust font size */}

            <div style={{ display: 'flex' }}>
              <Scroll color="orange" size={30} style={{ marginRight: '5px', marginTop: '5px' }} />
              <span style={{ fontSize: '1.4em', fontWeight: 'bold' }}>54</span>
              <span style={{ marginLeft: '4px', marginTop: '8px'}}>quests completed</span>
            </div>
            </Typography>

            <hr style={{ border: 'none', borderTop: '1px solid black', marginLeft: "5%", margin: '10px 10px', width: "90%"}} />

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Typography fontFamily="mulish" variant="h6" marginBottom="10px" sx={{ marginLeft: '10px' }}>
                <b>Showcase</b>
              </Typography>
              <Typography fontFamily="mulish" variant="h6" marginBottom="10px" sx={{ marginRight: '10px', textAlign: 'right' }}>
                <b>18</b>
              </Typography>
            </div>

            <div style={{display: 'flex'}}>
            <GDCGladiatorIcon tooltipText="Fall 2024 GDC Gladiator" sx={{ fontSize: '5rem' }} />
            <Tooltip title={<span style={{ fontSize: '1.2rem' }}>Top 5% All-Time Explorer</span>} placement="right" arrow>
              <TokenTwoToneIcon sx={{ fontSize: '5rem' }} />
            </Tooltip>
            <Tooltip title={<span style={{ fontSize: '1.2rem' }}>Winter 2023 3rd PCL Prodigy</span>} placement="right" arrow>
              <MilitaryTechIcon sx={{ fontSize: '5rem' }} />
            </Tooltip>
            </div>

          </CardContent>
        </Card>

          <Card
            variant="outlined"
            sx={{
              borderRadius: "10px",
              height: "fit-content",
              flex: '1 1 0%',
              padding: 1,
              width: '240px'
            }}
          >
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0, marginTop: 1, fontSize: '24px'}}>
            <b>Recent Activity:</b>
            <hr style={{ border: 'none', borderTop: '1px solid black', marginLeft: "5%", margin: '10px 10px', width: "90%"}} />
  
            <Card variant="outlined" sx={{ width: '100%', marginBottom: 1}}>
              <CardContent style={{padding: 5}}>
                <div style={{display: 'flex'}}>
                  <GDCGladiatorIcon tooltipText="Fall 2024 GDC Gladiator" sx={{ fontSize: '3rem'}} />
                  <Typography fontFamily="mulish" variant="body1" sx={{fontSize: '14px', marginTop: 1, marginLeft: 1}}>
                    Achieved Fall 2024 GDC Gladiator!
                  </Typography>
                </div>

              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ width: '100%', marginBottom: 1}}>
              <CardContent style={{padding: 5}}>
                <div style={{display: 'flex'}}>
              <Droplets color="blue" size={30} style={{marginLeft: '5px', marginRight: '5px', marginTop: '5px' }} />
                  <Typography fontFamily="mulish" variant="body1" sx={{fontSize: '14px', marginTop: 1, marginLeft: 1}}>
                    Completed Swim at Jamail Pool!
                  </Typography>
                </div>

              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ width: '100%', marginBottom: 1}}>
              <CardContent style={{padding: 5}}>
                <div style={{display: 'flex'}}>
              <Ghost color="black" size={30} style={{marginLeft: '5px', marginRight: '5px', marginTop: '5px' }} />
                  <Typography fontFamily="mulish" variant="body1" sx={{fontSize: '14px', marginTop: 1, marginLeft: 1}}>
                    Completed Trick or Treat at Longhorn Halloween!
                  </Typography>
                </div>

              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ width: '100%', marginBottom: 1}}>
              <CardContent style={{padding: 5}}>
                <div style={{display: 'flex'}}>
              <Footprints color="red" size={30} style={{marginLeft: '5px', marginRight: '5px', marginTop: '5px' }} />
                  <Typography fontFamily="mulish" variant="body1" sx={{fontSize: '14px', marginTop: 1, marginLeft: 1}}>
                    Complete Run Laps at Caven Clark Field!
                  </Typography>
                </div>

              </CardContent>
            </Card>

          </CardContent>
          </Card>
        </Box>

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
            <Typography fontFamily="mulish" variant="h5" component="div" align="center" style={{marginBottom: 10}}>
              <b>Campus Heat Map</b>
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
            <span style={{ fontSize: '1.4em', fontWeight: 'bold'}}>20% </span> of your time is spent in the GDC
          </Typography>
          <Box
            sx={{
              marginTop: 3,
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              gap: '10px',
              fontFamily: 'Mulish, sans-serif'
            }}
          >
            <AnimatedBar max={20} percentage={20} rank={1} label={"GDC"} />
            <AnimatedBar max={20} percentage={15} rank={2} label={"AND"} />
            <AnimatedBar max={20} percentage={12} rank={3} label={"KIN"} />
            <AnimatedBar max={20} percentage={10} rank={4} label={"ETC"} />
            <AnimatedBar max={20} percentage={8} rank={5} label={"SZB"}  />
            <AnimatedBar max={20} percentage={7} rank={6} label={"PCL"}  />
            <AnimatedBar max={20} percentage={6} rank={7} label={"JES"}  />
            <AnimatedBar max={20} percentage={5} rank={8} label={"CBA"}  />
            <AnimatedBar max={20} percentage={4} rank={9} label={"WEL"}  />
            <AnimatedBar max={20} percentage={3} rank={10} label={"BUR"}  />
            <AnimatedBar max={20} percentage={3} rank={11} label={"RLM"}  />
            <AnimatedBar max={20} percentage={2} rank={12} label={"FAC"}  />
            <AnimatedBar max={20} percentage={2} rank={13} label={"CMA"}  />
            <AnimatedBar max={20} percentage={1} rank={14} label={"HRC"}  />
            <AnimatedBar max={20} percentage={1} rank={15} label={"UTC"}  />
            <AnimatedBar max={20} percentage={1} rank={16} label={"PAR"}  />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Profile;
