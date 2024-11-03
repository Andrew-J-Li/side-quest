import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

// Define a neon color scheme inspired by Japanese retro arcade aesthetics
const arcadeColors = {
    card: '#FFFFFF',       // Slightly lighter dark card color
    button: '#39ff14',     // Neon green button color
    buttonText: '#000000', // Black text for button
    title: '#101010',      // Neon pink title color
    glow: 'rgba(150,250,255,0.5)', // Green glow effect
};

const DailyPollCard = () => {
    const [isVoted, setIsVoted] = useState(false); // State to track if an option has been voted

    const pollData = {
        library: { votes: 17, label: "PCL" },
        cafe: { votes: 20, label: "McCombs NRG Center" },
        studyRoom: { votes: 24, label: "Jendy's" },
    };

    const totalVotes = Object.values(pollData).reduce((sum, option) => sum + option.votes, 0);

    const calculatePercentage = (optionVotes) => {
        return totalVotes > 0 ? ((optionVotes / totalVotes) * 100).toFixed(1) : 0;
    };

    const handleVote = () => {
        setIsVoted(true); // Set voted state to true when any button is clicked
    };

    return (
        <Card variant="outlined" sx={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', mb: 3, p: 2, backgroundColor: arcadeColors.card, boxShadow: `0 0 20px ${arcadeColors.glow}` }}>
            <CardContent>
                <Typography fontFamily='mulish' variant="h6" marginBottom="30px" gutterBottom sx={{ color: arcadeColors.title, textShadow: `0 0 10px ${arcadeColors.glow}` }}>
                    Where is the best place to do group projects?
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {Object.entries(pollData).map(([key, { votes, label }]) => (
                        <Button 
                            key={key} 
                            variant="outlined" 
                            onClick={handleVote} // Call handleVote on click
                            fullWidth // Make button take full width
                            sx={{ 
                                backgroundColor: arcadeColors.button, 
                                color: arcadeColors.buttonText, 
                                '&:hover': { 
                                    backgroundColor: arcadeColors.buttonText, 
                                    color: arcadeColors.button, 
                                    boxShadow: `0 0 20px ${arcadeColors.glow}`, // Neon glow on hover
                                },
                                boxShadow: `0 0 5px ${arcadeColors.glow}`, // Neon glow effect on button
                            }} 
                        >
                            {label} {isVoted ? `(${calculatePercentage(votes)}%)` : ""}
                        </Button>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default DailyPollCard;
