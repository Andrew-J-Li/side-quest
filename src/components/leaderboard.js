import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Avatar, Tabs, Tab } from '@mui/material';
import userPfp from '../images/userPfp.jpeg';

const userPoints = 6996;

const Leaderboard = () => {
    const [value, setValue] = useState(0); // State to manage the selected tab

    const handleChange = (event, newValue) => {
        setValue(newValue); // Update the selected tab
    };

    const users = [
        { username: '2nd Place User', score: value === 0 ? userPoints + 3 : value === 1 ? userPoints - 96 : userPoints + 4769, imgSrc: 'user_b.jpg' },
        value === 1 ? { username: 'YOU', score: userPoints, imgSrc: userPfp, isHighlighted: true } : 
            value === 2 ? { username: '1st Place User', score: userPoints + 5015, imgSrc: 'user_a.jpg' } :
            { username: '1st Place User', score: userPoints + 306, imgSrc: 'user_a.jpg'},
        { username: '3rd Place User', score: value === 0 ? userPoints + 1 : value === 1 ? userPoints - 102 : userPoints + 4743, imgSrc: 'user_c.jpg' },
    ];

    const listItems = getListItems(value);

    return (
        <Box sx={{ maxWidth: '50%', mx: 'auto', mt: 4, bgcolor: '#81F2FF50', height: '100px' }}>
            <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, mb: 2, bgcolor: '#81F2FF', height: '100%' }}>
                <Avatar src={userPfp} sx={{ height: '100%', width: 'auto', aspectRatio: '1/1', mr: 2, bgcolor: 'grey.300' }}>A</Avatar>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6">Long4Head</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography style={{ fontFamily: "Mulish" }} variant="body2">
                                <strong style={{ fontSize: '1.2rem' }}>#</strong>
                                <strong style={{ fontSize: '1.2rem' }}>4</strong> Friends
                            </Typography>
                            <Typography style={{ fontFamily: "Mulish" }} variant="body2">
                                <strong style={{ fontSize: '1.2rem' }}>#</strong>
                                <strong style={{ fontSize: '1.2rem' }}>1</strong> Nearby
                            </Typography>
                            <Typography style={{ fontFamily: "Mulish" }} variant="body2">
                                <strong style={{ fontSize: '1.2rem' }}>#</strong>
                                <strong style={{ fontSize: '1.2rem' }}>1069</strong> Global
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{fontSize:'4rem'}}> {userPoints} </Typography>
                    </Box>
                </Box>
            </Card>

            <Card sx={{ bgcolor: '#81F2FF50' }}>
                <CardContent>
                    <Tabs font='Mulish' value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
                        <Tab label="Friends" />
                        <Tab label="Nearby" />
                        <Tab label="Global" />
                    </Tabs>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'flex-end', // Align cards to the bottom for the podium effect
                            mt: 2,
                            bgcolor: '#81F2FF75',
                            height: '200px', // Adjust this value for the height of the containing rectangle
                            position: 'relative' // Optional, for further layout adjustments if needed
                        }}
                    >
                        {users.map((user, index) => (
                            <UserCard
                                key={index}
                                username={user.username}
                                score={user.score}
                                imgSrc={user.imgSrc}
                                isHighlighted={user.isHighlighted}
                            />
                        ))}
                    </Box>

                    <Box sx={{ mt: 2, maxHeight: '300px', overflowY: 'auto', bgcolor: '#F6D2F660' }}> {/* Fixed height and scroll */}
                        {listItems.map((item, index) => (
                            <ListItem
                                key={index}
                                rank={item.username === "YOU" && value === 2 ? 1069 : index + 4} // Adding rank as a prop
                                username={item.username}
                                isHighlighted={item.username === "YOU"} // Highlight if the item is "YOU"
                                score={item.score}
                            />
                        ))}
                    </Box>

                </CardContent>
            </Card>
        </Box>
    );
};

const UserCard = ({ username, score, imgSrc, isHighlighted, sx }) => (
    <Box
        sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            bgcolor: 'transparent',
            borderRadius: 1,
            p: 2,
            width: '100px',
            height: '100px',
            justifyContent: 'flex-end',
            ...sx
        }}
    >
        {/* Rectangle behind the text */}
        <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: username === '1st Place User' || username === 'YOU' ? '110px' :
                    username === '2nd Place User' ? '90px' :
                        username === '3rd Place User' ? '70px' : '0px',
                bgcolor: username === '1st Place User' || username === 'YOU' ? 'gold' :
                    username === '2nd Place User' ? 'silver' :
                        username === '3rd Place User' ? '#cd7f32' : 'transparent',
                zIndex: 0
            }}
        />

        <Avatar
            alt={username}
            src={imgSrc}
            sx={{
                position: 'absolute', // Position the avatar absolutely
                top: username === '1st Place User' || username === 'YOU' ? '-50px' :
                    username === '2nd Place User' ? '-30px' :
                        username === '3rd Place User' ? '-10px' : '0px',
                width: 60,
                height: 60,
                zIndex: 1
            }}
        />

        {/* New Box for spacing the text */}
        <Box sx={{
            mb: username === '1st Place User' || username === 'YOU' ? '45px' :
                username === '2nd Place User' ? '25px' :
                    username === '3rd Place User' ? '5px' : '0px', zIndex: 1
        }}> {/* Padding Top set to 1 (you can adjust this value) */}
            <Typography style={{ fontFamily: "Mulish" }} variant="body1" sx={{ zIndex: 1 }}>{score}</Typography>
            <Typography style={{ fontFamily: "Mulish" }} variant="body2" sx={{ zIndex: 1 }}>{username}</Typography>
        </Box>
    </Box>
);




const ListItem = ({ rank, username, score, isHighlighted }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            p: 1,
            mb: 1,
            bgcolor: isHighlighted ? '#369eff' : '#81F2FF75',
            borderRadius: 1,
            fontWeight: isHighlighted ? 'bold' : 'normal',
            justifyContent: 'space-between', // Added for spacing
        }}
    >
        <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 2 }}>
            {rank}
        </Typography>
        <Avatar src={username === "YOU" ? userPfp : undefined} sx={{ bgcolor: 'grey.300', mr: 1 }}>A</Avatar>
        <Typography style={{ fontFamily: "Mulish" }} variant="body2">{username}</Typography>
        <Typography style={{ fontFamily: "Mulish" }} variant="body2" sx={{ marginLeft: 'auto', mr: 2 }}>{score}</Typography> {/* Added to show score */}
    </Box>
);




const getListItems = (value) => {
    let userList = [];
    if (value === 0) { // Assuming 0 corresponds to Friends
        userList.push({ username: "YOU", score: userPoints });
        for (let i = 0; i < 21; i++) {
            userList.push({ username: "User " + (i + 10).toString(36), score: userPoints - 1 - i * 127 })
        }
    } else if (value === 1) { // Assuming 1 corresponds to Nearby
        for (let i = 0; i < 22; i++) {
            userList.push({ username: "User " + (i + 10).toString(36), score: userPoints - 1000 - i * 214 })
        }
    } else if (value === 2) { // Assuming 2 corresponds to Global
        for (let i = 0; i < 22; i++) {
            userList.push({ username: "User " + (i + 10).toString(36), score: userPoints + 4200 - i * 51})
        }
        userList.push({ username: "YOU", score: userPoints });
    }
    return userList;
};


export default Leaderboard;