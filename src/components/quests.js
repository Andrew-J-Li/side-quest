import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box, Grid, Button } from '@mui/material';
import '../components/quests.css';
import gatesDellImage from '../images/gates-dell-complex.jpg';
import utTowerImage from '../images/ut-tower.png';

const Quests = () => {
    // Handler functions for button clicks
    const handleLike = () => {
        alert("Liked!");
    };

    const handleShare = () => {
        alert("Shared!");
    };

    const handleComplete = () => {
        alert("Quest Completed!");
    };

    return (
        <div>
            <div className="main-content">
                <Typography variant="h4" align="center" gutterBottom>
                    Daily Quests
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {/* Quest Card 1 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={gatesDellImage}
                                alt="Gates-Dell Complex"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Visit the Gates-Dell Complex
                                </Typography>
                                <Chip label="Rare" color="warning" />
                                <Box display="flex" justifyContent="space-between" mt={2}>
                                    <Typography variant="body2" color="text.secondary">
                                        <span className="icon">❤️</span>3.1k
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span className="icon">🔁</span>0.4k
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span className="icon">▶️</span>7.1k
                                    </Typography>
                                </Box>
                                {/* Action Buttons */}
                                <Box display="flex" justifyContent="space-between" mt={2}>
                                    <Button variant="outlined" color="primary" onClick={handleLike}>
                                        Like
                                    </Button>
                                    <Button variant="outlined" color="secondary" onClick={handleShare}>
                                        Share
                                    </Button>
                                    <Button variant="contained" color="success" onClick={handleComplete}>
                                        Complete
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Quest Card 2 */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={utTowerImage}
                                alt="UT Tower"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Visit the UT Tower
                                </Typography>
                                <Chip label="Common" color="primary" />
                                <Box display="flex" justifyContent="space-between" mt={2}>
                                    <Typography variant="body2" color="text.secondary">
                                        <span className="icon">❤️</span>3.1k
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span className="icon">🔁</span>0.4k
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <span className="icon">▶️</span>7.1k
                                    </Typography>
                                </Box>
                                {/* Action Buttons */}
                                <Box display="flex" justifyContent="space-between" mt={2}>
                                    <Button variant="outlined" color="primary" onClick={handleLike}>
                                        Like
                                    </Button>
                                    <Button variant="outlined" color="secondary" onClick={handleShare}>
                                        Share
                                    </Button>
                                    <Button variant="contained" color="success" onClick={handleComplete}>
                                        Complete
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Quests;
