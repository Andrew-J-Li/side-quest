import React from 'react';
import { Box, Button, Card, CardContent, Typography, Avatar, Tabs, Tab } from '@mui/material';

const Leaderboard = () => {
    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, mb: 2 }}>
                <Avatar sx={{ width: 50, height: 50, mr: 2, bgcolor: 'grey.300' }}>A</Avatar>
                <Box>
                    <Typography variant="h6">User Name</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="body2">#4 Friends</Typography>
                        <Typography variant="body2">#1 Nearby</Typography>
                        <Typography variant="body2">#1069 Global</Typography>
                    </Box>
                </Box>
            </Card>

            <Card>
                <CardContent>
                    <Tabs value={0} indicatorColor="primary" textColor="primary" variant="fullWidth">
                        <Tab label="Friends" />
                        <Tab label="Nearby" />
                        <Tab label="Global" />
                    </Tabs>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                        <UserCard username="user b" score="1601" imgSrc="user_b.jpg" />
                        <UserCard username="user a" score="1602" imgSrc="user_a.jpg" />
                        <UserCard username="user c" score="1600" imgSrc="user_c.jpg" />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, padding: 1, bgcolor: 'grey.100', borderRadius: 1 }}>
                        <Avatar sx={{ bgcolor: 'grey.300', mr: 1 }}>A</Avatar>
                        <Typography variant="h6">YOU</Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <ListItem username="List item 1" />
                        <ListItem username="List item 2" />
                        <ListItem username="List item 3" />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

const UserCard = ({ username, score, imgSrc }) => (
    <Box sx={{ textAlign: 'center' }}>
        <Avatar alt={username} src={imgSrc} sx={{ width: 60, height: 60, mb: 1 }} />
        <Typography variant="body1">{score}</Typography>
        <Typography variant="body2">{username}</Typography>
    </Box>
);

const ListItem = ({ username }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 1, mb: 1, bgcolor: 'grey.200', borderRadius: 1 }}>
        <Avatar sx={{ bgcolor: 'grey.300', mr: 1 }}>A</Avatar>
        <Typography variant="body2">{username}</Typography>
    </Box>
);

export default Leaderboard;