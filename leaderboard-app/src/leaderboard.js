import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Avatar, Tabs, Tab } from '@mui/material';

const Leaderboard = () => {
    const [value, setValue] = useState(0); // State to manage the selected tab

    const handleChange = (event, newValue) => {
        setValue(newValue); // Update the selected tab
    };

    const users = [
        { username: '2nd Place User', score: '1601', imgSrc: 'user_b.jpg' },
        // Conditional rendering based on the selected tab
        value === 1 ? { username: 'YOU', score: '1602', imgSrc: 'user_a.jpg' } : { username: '1st Place User', score: '1602', imgSrc: 'user_a.jpg' },
        { username: '3rd Place User', score: '1600', imgSrc: 'user_c.jpg' },
    ];

    const listItems = getListItems(value);

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
                    <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
                        <Tab label="Friends" />
                        <Tab label="Nearby" />
                        <Tab label="Global" />
                    </Tabs>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                        {users.map((user, index) => (
                            <UserCard key={index} username={user.username} score={user.score} imgSrc={user.imgSrc} />
                        ))}
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        {listItems.map((item, index) => (
                            <ListItem
                                key={index}
                                rank={item.rank} // Pass rank to ListItem
                                username={item.username}
                                isHighlighted={item.username === "YOU"} // Highlight if the item is "YOU"
                            />
                        ))}
                    </Box>


                </CardContent>
            </Card>
        </Box>
    );
};

const UserCard = ({ username, score, imgSrc }) => (
    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar alt={username} src={imgSrc} sx={{ width: 60, height: 60, mb: 1 }} />
        <Typography variant="body1">{score}</Typography>
        <Typography variant="body2">{username}</Typography>
    </Box>
);


const ListItem = ({ rank, username, isHighlighted }) => (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        mb: 1,
        bgcolor: isHighlighted ? 'yellow' : 'grey.200',
        borderRadius: 1,
        fontWeight: isHighlighted ? 'bold' : 'normal'
    }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 }}>{rank}</Typography> {/* Display rank */}
        <Avatar sx={{ bgcolor: 'grey.300', mr: 1 }}>A</Avatar>
        <Typography variant="body2">{username}</Typography>
    </Box>
);

const getListItems = (value) => {
    if (value === 0) { // Assuming 0 corresponds to Friends
        return [{ rank: 4, username: "YOU" }, { rank: 5, username: "user a" }, { rank: 6, username: "user b" }];
    } else if (value === 1) { // Assuming 1 corresponds to Nearby
        return [{ rank: 4, username: "user a" }, { rank: 5, username: "user b" }, { rank: 6, username: "user c" }];
    } else if (value === 2) { // Assuming 2 corresponds to Global
        return [{ rank: 4, username: "user a" }, { rank: 5, username: "user b" }, { rank: 1069, username: "YOU" }];
    } else {
        return []; // Default case
    }
};


export default Leaderboard;