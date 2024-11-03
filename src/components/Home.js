import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, List, ListItem, ListItemAvatar, ListItemText, Button, Grid2, Paper } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import DailyPollCard from './DailyPollCard';

const HomePage = () => {
    const [fetchedAchievements, setRecentAchievements] = useState([]);

    useEffect(() => {
        const fetchedAchievements = [
            { title: "Fall 2024 GDC Gladiator!", time: "2d ago" },
            { title: "Completed 50 Quests", time: "4d ago" },
            { title: "30 Day Streak", time: "5d ago" },
        ];

        setRecentAchievements(fetchedAchievements);
    }, []);

    const friendPosts = [
        {
          id: 1,
          friendName: "Guts",
          profilePicture: "https://i.pinimg.com/736x/d6/0b/60/d60b60df9147a88c660bc1452385c3a7.jpg",
          postImage: require("../images/swim-meet.JPG"),
          title: "Watching some people swim",
          description: "Didn't realize watching people swim fast could be so entertaining. 10/10 swim meet.",
        },
        {
          id: 2,
          friendName: "Hu Tao",
          profilePicture: "https://wallpapers.com/images/hd/cool-anime-girl-pfp-hu-tao-6cjtrrhyvr2g24ik.jpg", // Replace with actual image URL
          postImage: require("../images/pma-top.JPG"),
          title: "Visited the top of the PMA!",
          description: "Almost got some people to jump.",
        },
        // Additional posts...
    ];      

    return (
        <Box sx={{ mx: 'auto', maxWidth: 1000, pb: 3 }}>
            {/* Featured Quest Banner */}
            <Paper
                variant="outlined"
                sx={{
                    mb: 4,
                    p: 3,
                    bgcolor: '#ff8214',
                    textAlign: 'center',
                    borderRadius: 2,
                }}
            >
                <Typography fontFamily='mulish' variant="h5" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <StarIcon sx={{ mr: 1, color: 'yellow' }} /> Featured Quest: Longhorn Halloween
                </Typography>
                <Typography fontFamily='mulish' variant="body1">Complete challenges and earn exclusive rewards!</Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }}>Join Now</Button>
            </Paper>

            <Grid2 container spacing={3} justifyContent="center">
                {/* Left Side - Limited quests and Recent Achievements */}
                <Grid2 item xs={12} md={4} width="40%">
                    {/* Limited quests Section */}
                    <DailyPollCard />

                    {/* Recent Achievements Section */}
                    <Card variant="outlined" sx={{ borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography fontFamily='mulish' variant="h6" gutterBottom>Recent Achievements</Typography>
                        <List>
                        {fetchedAchievements.map((achievement, index) => (
                            <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar><StarIcon /></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={achievement.title}
                                secondary={achievement.time}
                            />
                            </ListItem>
                        ))}
                        </List>
                    </CardContent>
                    <Button variant="text" sx={{ alignSelf: 'center', mb: 2 }}>
                        View All Achievements
                    </Button>
                    </Card>
                </Grid2>

                {/* Right Side - Social Media Feed */}
                <Grid2 item xs={12} md={8} width="40%">
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {/* Sample social media posts from friends */}
                        {friendPosts.map((post) => (
                        <Card key={post.id} variant="outlined" sx={{ borderRadius: '10px', padding: 2 }}>
                            <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar alt={post.friendName} src={post.profilePicture} sx={{ mr: 2 }} />
                                <Typography variant="h6" component="div">
                                {post.friendName}
                                </Typography>
                            </Box>
                            <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {post.description}
                            </Typography>
                            <Box
                                sx={{
                                width: '300px', // Set fixed width
                                height: '300px', // Set fixed height
                                overflow: 'hidden', // Hide overflow
                                borderRadius: '10px', // Round corners
                                position: 'relative', // Position relative for absolute positioning
                                margin: '0 auto 20px auto', // Center horizontally and add space below
                                }}
                            >
                                <img
                                src={post.postImage}
                                alt={post.title}
                                style={{
                                    width: '100%', // Full width to fill the container
                                    height: '100%', // Full height to fill the container
                                    objectFit: 'cover', // Crop the image to fit
                                    position: 'absolute', // Position absolute for better control
                                    top: '50%', // Center vertically
                                    left: '50%', // Center horizontally
                                    transform: 'translate(-50%, -50%)', // Adjust to truly center
                                }}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button variant="outlined" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <ThumbUpAltIcon sx={{ mr: 0.5 }} /> Like
                                </Button>
                                <Button variant="outlined" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <CommentIcon sx={{ mr: 0.5 }} /> Comment
                                </Button>
                                </Box>
                            </Box>
                            </CardContent>
                        </Card>
                        ))}
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default HomePage;
