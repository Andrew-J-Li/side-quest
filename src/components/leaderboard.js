import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Avatar, Tabs, Tab } from '@mui/material';
import userPfp from '../images/userPfp.jpeg';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Mulish', // Specify your desired font family
    },
});

const userPoints = 6996;
const userName = 'Long4Head';

const Leaderboard = () => {
    const [value, setValue] = useState(0); // State to manage the selected tab

    const handleChange = (event, newValue) => {
        setValue(newValue); // Update the selected tab
    };

    const users = [
        value === 0 ? {username: 'Hu Tao', score: userPoints + 3, imgSrc: 'https://wallpapers.com/images/hd/cool-anime-girl-pfp-hu-tao-6cjtrrhyvr2g24ik.jpg'} :
            { username: '2nd Place User', score: value === 0 ? userPoints + 3 : value === 1 ? userPoints - 96 : userPoints + 4769, imgSrc: 'user_b.jpg' },
        value === 1 ? { username: userName, score: userPoints, imgSrc: userPfp, isHighlighted: true } : 
            value === 2 ? { username: '1st Place User', score: userPoints + 5015, imgSrc: 'user_a.jpg' } :
            { username: 'HuangJ', score: userPoints + 306, imgSrc: 'https://th.bing.com/th/id/OIP.91GgEkbkpDaQ-Vv-7JeXGAHaE6?rs=1&pid=ImgDetMain'},
        value === 0 ? { username: 'Guts', score: value === 0 ? userPoints + 1 : value === 1 ? userPoints - 102 : userPoints + 4743, imgSrc: 'https://i.pinimg.com/736x/d6/0b/60/d60b60df9147a88c660bc1452385c3a7.jpg' }:
            { username: '3rd Place User', score: value === 0 ? userPoints + 1 : value === 1 ? userPoints - 102 : userPoints + 4743, imgSrc: 'user_c.jpg'}
    ];

    const listItems = getListItems(value);

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ maxWidth: '50%', mx: 'auto', mt: 4, bgcolor: '#81F2FF50', height: '100px' }}>
            <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, mb: 2, bgcolor: '#d6f4f9', height: '100%' }}>
                <Avatar src={userPfp} sx={{ height: '100%', width: 'auto', aspectRatio: '1/1', mr: 2, bgcolor: 'grey.300' }}>A</Avatar>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography sx={{fontSize:"1.5rem"}} variant="h6">Long4Head</Typography>
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
                        <Typography style = {{fontFamily: "Mulish"}} sx={{fontSize:'4rem'}}> {userPoints} </Typography>
                    </Box>
                </Box>
            </Card>

            <Card sx={{ bgcolor: '#FFFFFF25' }}>
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
                            bgcolor: '#81F2FF50',
                            height: '210px', // Adjust this value for the height of the containing rectangle
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

                    <Box sx={{ mt: 2, maxHeight: '300px', overflowY: 'auto', bgcolor: '#ffffff50' }}> {/* Fixed height and scroll */}
                        {listItems.map((item, index) => (
                            <ListItem
                                key={index}
                                rank={item.username == userName && value === 2 ? 1069 : index + 4} // Adding rank as a prop
                                username={item.username}
                                isHighlighted={item.username == userName} // Highlight if the item is {userName}
                                score={item.score}
                            />
                        ))}
                    </Box>

                </CardContent>
            </Card>
        </Box>
        </ThemeProvider>
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
                boxShadow: username === '1st Place User' || username == userName || username === 'HuangJ' ? `-2px -2px 4px ${'gold'}, 2px -2px 4px ${'gold'}, -2px -2px 4px ${'gold'}` :
                        username === '2nd Place User' || username === 'Hu Tao' ? `-2px -2px 4px ${'silver'}, 2px -2px 4px ${'silver'}, -2px -2px 4px ${'silver'}` :
                        username === '3rd Place User' || username === 'Guts' ? `-2px -2px 4px ${'#cd7f32'}, 2px -2px 4px ${'#cd7f32'}, -2px -2px 4px ${'#cd7f32'}` : undefined,
                height: username === '1st Place User' || username == userName || username === 'HuangJ' ? '110px' :
                        username === '2nd Place User' || username === 'Hu Tao' ? '90px' :
                        username === '3rd Place User' || username === 'Guts' ? '70px' : '0px',
                bgcolor: username === '1st Place User' || username == userName || username === 'HuangJ' ? 'gold' :
                        username === '2nd Place User' || username === 'Hu Tao' ? 'silver' :
                        username === '3rd Place User' || username === 'Guts' ? '#cd7f32' : 'transparent',
                zIndex: 0,
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px'
            }}
        />

        <Avatar
            alt={username}
            src={imgSrc}
            sx={{
                position: 'absolute', // Position the avatar absolutely
                top: username === '1st Place User' || username == userName || username === 'HuangJ' ? '-65px' :
                    username === '2nd Place User' || username === 'Hu Tao' ? '-45px' :
                    username === '3rd Place User' || username === 'Guts' ? '-25px' : '0px',
                width: 80,
                height: 80,
                zIndex: 1
            }}
        />

        {/* New Box for spacing the text */}
        <Box sx={{
            mb: username === '1st Place User' || username == userName || username === 'HuangJ' ? '45px' :
                username === '2nd Place User' || username === 'Hu Tao' ? '25px' :
                username === '3rd Place User' || username === 'Guts' ? '5px' : '0px', zIndex: 1
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
            bgcolor: isHighlighted ? '#a3e5ff' : '#a3e5ff25',
            borderRadius: 1,
            fontWeight: isHighlighted ? 'bold' : 'normal',
            justifyContent: 'space-between', // Added for spacing
        }}
    >
        <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 2 }}>
            {rank}
        </Typography>
        <Avatar src={username == userName ? userPfp : undefined} sx={{ bgcolor: 'grey.300', mr: 1 }}>A</Avatar>
        <Typography style={{ fontFamily: "Mulish" }} variant="body2">{username}</Typography>
        <Typography style={{ fontFamily: "Mulish" }} variant="body2" sx={{ marginLeft: 'auto', mr: 2 }}>{score}</Typography> {/* Added to show score */}
    </Box>
);




const getListItems = (value) => {
    let userList = [];
    if (value === 0) { // Assuming 0 corresponds to Friends
        userList.push({ username: userName, score: userPoints });
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
        userList.push({ username: userName, score: userPoints });
    }
    return userList;
};


export default Leaderboard;