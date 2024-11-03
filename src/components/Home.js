import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, List, ListItem, ListItemAvatar, ListItemText, Button, Grid2, Paper } from '@mui/material';
import { Event as EventIcon, Person as PersonIcon, Star as StarIcon } from '@mui/icons-material';

const HomePage = () => {
    const [friendActivities, setFriendActivities] = useState([]);
    const [events, setEvents] = useState([]);
    const [fetchedAchievements, setRecentAchievements] = useState([]);

    useEffect(() => {
        // Mock data for friends' activities and events
        const fetchedActivities = [
            { name: "Alex", activity: "completed a Side Quest", time: "2h ago" },
            { name: "Jordan", activity: "leveled up to 5", time: "1d ago" },
            { name: "Taylor", activity: "started a new quest", time: "3d ago" },
        ];
        const fetchedEvents = [
            { title: "Weekend Special Quest", description: "Limited-time quest for extra rewards!", time: "2d left" },
            { title: "Double XP Day", description: "Earn double experience points!", time: "Ends tonight" },
        ];
        const fetchedAchievements = [
            { title: "Reached Level 10", time: "1h ago" },
            { title: "Completed 50 Quests", time: "1d ago" },
            { title: "Earned 1000 XP", time: "3d ago" },
        ];

        setRecentAchievements(fetchedAchievements);
        setFriendActivities(fetchedActivities);
        setEvents(fetchedEvents);
    }, []);

    return (
        <Box sx={{ mx: 'auto', maxWidth: 1200, p: 3 }}>
            <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                Welcome to Side Quest
            </Typography>

            {/* Featured Quest Banner */}
            <Paper
                sx={{
                    mb: 4,
                    p: 3,
                    bgcolor: '#ffecb3',
                    textAlign: 'center',
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <StarIcon sx={{ mr: 1, color: 'orange' }} /> Featured Quest: The Golden Adventure
                </Typography>
                <Typography variant="body1">Complete challenges and earn exclusive rewards!</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>Join Now</Button>
            </Paper>

            <Grid2 container spacing={3} justifyContent="center">
                {/* Friend Activities Section */}
                <Grid2 item xs={12} md={4} width="32%">
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Friend Activities</Typography>
                            <List>
                                {friendActivities.map((activity, index) => (
                                    <ListItem key={index}>
                                        <ListItemAvatar>
                                            <Avatar><PersonIcon /></Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={`${activity.name} ${activity.activity}`}
                                            secondary={activity.time}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                        <Button variant="text" sx={{ alignSelf: 'center', mb: 2 }}>
                            See All Friends
                        </Button>
                    </Card>
                </Grid2>

                {/* Limited Events Section */}
                <Grid2 item xs={12} md={4} width="32%">
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Limited Events</Typography>
                            <List>
                                {events.map((event, index) => (
                                    <ListItem key={index}>
                                        <ListItemAvatar>
                                            <Avatar><EventIcon /></Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={event.title}
                                            secondary={`${event.description} • ${event.time}`}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                        <Button variant="text" sx={{ alignSelf: 'center', mb: 2 }}>
                            View All Events
                        </Button>
                    </Card>
                </Grid2>

                {/* Achievements Section */}
                <Grid2 item xs={12} md={4} width="32%">
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Recent Achievements</Typography>
                            <List>
                                {fetchedAchievements.map((achievement, index) => (
                                    <ListItem key={index}>
                                        <ListItemAvatar>
                                            <Avatar><StarIcon /></Avatar> {/* Customize icon as needed */}
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

            </Grid2>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Button variant="contained" color="primary" sx={{ mx: 2 }}>Start New Quest</Button>
                <Button variant="outlined" color="secondary" sx={{ mx: 2 }}>Invite Friends</Button>
            </Box>
        </Box>
    );
};

export default HomePage;
