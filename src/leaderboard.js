import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Avatar, Tabs, Tab } from '@mui/material';
import userPfp from './images/userPfp.jpeg';

const Leaderboard = () => {
    const [value, setValue] = useState(0); // State to manage the selected tab

    const handleChange = (event, newValue) => {
        setValue(newValue); // Update the selected tab
    };

    const users = [
        { username: '2nd Place User', score: '1601', imgSrc: 'user_b.jpg' },
        value === 1 ? { username: 'YOU', score: '1602', imgSrc: userPfp, isHighlighted: true } : { username: '1st Place User', score: '1602', imgSrc: 'user_a.jpg' },
        { username: '3rd Place User', score: '1600', imgSrc: 'user_c.jpg' },
    ];

    const listItems = getListItems(value);

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, mb: 2 }}>
                <Avatar src={userPfp} sx={{ width: 50, height: 50, mr: 2, bgcolor: 'grey.300' }}>A</Avatar>
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
                            <UserCard key={index} username={user.username} score={user.score} imgSrc={user.imgSrc} isHighlighted={user.isHighlighted} />
                        ))}
                    </Box>

                    <Box sx={{ mt: 2, maxHeight: '300px', overflowY: 'auto' }}> {/* Fixed height and scroll */}
                        {listItems.map((item, index) => (
                            <ListItem
                                key={index}
                                rank={index + 1} // Adding rank as a prop
                                username={item}
                                isHighlighted={item === "YOU"} // Highlight if the item is "YOU"
                            />
                        ))}
                    </Box>

                </CardContent>
            </Card>
        </Box>
    );
};

const UserCard = ({ username, score, imgSrc, isHighlighted }) => (
    <Box
        sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: isHighlighted ? 'yellow' : 'transparent', // Apply yellow background if highlighted
            borderRadius: 1, // Optional: for rounded corners
            p: 2, // Padding for the box
            width: '100px', // Set a fixed width
            height: '100px', // Set the same height for a square
            justifyContent: 'center', // Center content vertically
        }}
    >
        <Avatar alt={username} src={imgSrc} sx={{ width: 60, height: 60, mb: 1 }} />
        <Typography variant="body1">{score}</Typography>
        <Typography variant="body2">{username}</Typography>
    </Box>
);



const ListItem = ({ rank, username, isHighlighted }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            p: 1,
            mb: 1,
            bgcolor: isHighlighted ? 'yellow' : 'grey.200', // Background color for highlighted item
            borderRadius: 1,
            fontWeight: isHighlighted ? 'bold' : 'normal', // Bold for highlighted item
        }}
    >
        <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 2 }}>
            {rank} {/* Display rank on the left side */}
        </Typography>
        <Avatar src = {username === "YOU"?userPfp:undefined} sx={{ bgcolor: 'grey.300', mr: 1 }}>A</Avatar>
        <Typography variant="body2">{username}</Typography>
    </Box>
);



const getListItems = (value) => {
    let userList = [];
    if (value === 0) { // Assuming 0 corresponds to Friends
        userList.push("YOU");
        for (let i = 0; i < 19; i++) {
            userList.push("User " + (i + 10).toString(36))
        }
    } else if (value === 1) { // Assuming 1 corresponds to Nearby
        for (let i = 0; i < 20; i++) {
            userList.push("User " + (i + 10).toString(36))
        }
    } else if (value === 2) { // Assuming 2 corresponds to Global
        for (let i = 0; i < 19; i++) {
            userList.push("User " + (i + 10).toString(36))
        }
        userList.push("YOU");
    }
    return userList;
};


export default Leaderboard;