import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, List, ListItem, ListItemAvatar, ListItemText, Button, Grid2, Paper } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import DailyPollCard from './DailyPollCard';
import { Heart, MessageCircle } from 'lucide-react';


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
        {
        id: 2,
        friendName: "HuangJ",
        profilePicture: "https://th.bing.com/th/id/OIP.91GgEkbkpDaQ-Vv-7JeXGAHaE6?rs=1&pid=ImgDetMain", // Replace with actual image URL
        postImage: "https://th.bing.com/th/id/OIP.9f16tR6bmO7vCUfw9UCrJwHaFs?w=278&h=204&c=7&r=0&o=5&dpr=2&pid=1.7",
        title: "On the real engineering major",
        description: "I've concluded that computer science is superior to any engineering major",
        },
        // Additional posts...
    ];      

    return (
        <Box sx={{ mx: 'auto', maxWidth: 1200, pb: 3 }}>
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
                <Typography fontFamily='mulish' variant="body1">Complete quests and earn limited badges!</Typography>
                <Link to="/quests">
                    <Button variant="contained" color="secondary" sx={{ mt: 2 }}>Enter Now</Button>
                </Link>
            </Paper>

            <Grid2 container spacing={3} justifyContent="center">
                {/* Right Side - Social Media Feed */}
                <Grid2 item size={8}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {/* Sample social media posts from friends */}
                        {friendPosts.map((post) => (
                        <Card key={post.id} variant="outlined" sx={{ borderRadius: '10px', paddingTop: 2, paddingRight: 2, paddingLeft: 2 }}>
                            <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar alt={post.friendName} src={post.profilePicture} sx={{ mr: 2 }} />
                                <Typography variant="h6" component="div" sx={{fontFamily: "mulish"}}>
                                {post.friendName}
                                </Typography>
                            </Box>
                            <Typography variant="h6" component="div" sx={{ mb: 1, fontFamily: "mulish" }}>
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: "mulish" }}>
                                {post.description}
                            </Typography>
                            <Box
                                sx={{
                                width: 'auto', // Set fixed width
                                height: '400px', // Set fixed height
                                overflow: 'hidden', // Hide overflow
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
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Button 
                                    variant="text" 
                                    color="primary" 
                                    style={{width: '50px'}}
                                >
                                    <Heart style={{ width: '40px' }} />
                                </Button>
                                <Button 
                                    variant="text" 
                                    color="primary" 
                                    style={{width: '50px'}}
                                >
                                    <MessageCircle style={{ width: '40px' }} />
                                </Button>
                            </Box>
                            </CardContent>
                        </Card>
                        ))}
                    </Box>
                </Grid2>

                {/* Left Side - Limited quests and Recent Achievements */}
                <Grid2 item size={4}>
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
                            <ListItemText primaryTypographyProps={{fontFamily: 'mulish'}} 
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
            </Grid2>
        </Box>
    );
};

export default HomePage;
