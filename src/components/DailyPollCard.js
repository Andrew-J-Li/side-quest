import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

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
        <Card variant="outlined" sx={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', mb: 3, p: 2 }}>
            <CardContent>
                <Typography fontFamily='mulish' variant="h6" marginBottom="30px" gutterBottom>
                    Where is the best place to do group projects?
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {Object.entries(pollData).map(([key, { votes, label }]) => (
                        <Button 
                            key={key} 
                            variant="outlined" 
                            onClick={handleVote} // Call handleVote on click
                            fullWidth // Make button take full width
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
