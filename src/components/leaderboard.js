import React, { useState } from 'react';
import { Box, Card, CardContent, Tabs, Tab, Typography, Avatar, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import userPfp from '../images/user-pfp.webp';
import aerialView from '../images/ut-aerial.webp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MapPin } from 'lucide-react';

const theme = createTheme({
    typography: {
        fontFamily: 'Mulish', // Specify your desired font family
    },
});

const userPoints = 6321;
const userName = 'Gon';

const Leaderboard = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0); // State to manage the selected tab
    const [currentLeaderboard, setCurrentLeaderboard] = useState([]);
    const [dialogTitle, setDialogTitle] = useState('');
    const [avatarColorsState, setAvatarColorsState] = useState([]);

    const handleOpen = (leaderboard, title) => {
        setCurrentLeaderboard(leaderboard);
        setDialogTitle(title);
        const colors = leaderboard.map(() => {
            return avatarColors[Math.floor(Math.random() * avatarColors.length)];
        });
        setAvatarColorsState(colors);
        setOpen(true);
    };
    const avatarColors = [
        '#007BFF',  // Blue
        '#28A745',  // Green
        '#FFC107',  // Amber
        '#17A2B8',  // Cyan
        '#6F42C1',  // Purple
        '#FF6F61',  // Coral
        '#FFCE54',  // Gold
        '#E83E8C',  // Pink
        '#343A40',  // Dark Gray
        '#6C757D'   // Light Gray
    ];    

    const handleChange = (event, newValue) => {
        setValue(newValue); // Update the selected tab
    };

    const handleClose = () => {
        setOpen(false);     // Close the modal
    };

    // Example top ten leaderboard data
    const leaderboardGDC = [
        { rank: 1, username: 'Leslie', time: '12:15' },
        { rank: 2, username: 'Sam', time: '12:01' },
        { rank: 3, username: 'Taylor', time: '11:53' },
        { rank: 4, username: 'Matt', time: '11:45' },
        { rank: 5, username: 'Marry', time: '11:32' },
        { rank: 6, username: 'Alex', time: '11:25' },
        { rank: 7, username: 'Aki', time: '11:11' },
        { rank: 8, username: 'Chris', time: '11:05' },
        { rank: 9, username: 'Guts', time: '10:48' },
        { rank: 10, username: 'Hu Tao', time: '10:45' },
    ];
    
    const leaderboardJEN = [
        { rank: 1, username: 'Robin', time: '12:30' },
        { rank: 2, username: 'Jordan', time: '12:10' },
        { rank: 3, username: 'Chris', time: '11:55' },
        { rank: 4, username: 'Blake', time: '11:50' },
        { rank: 5, username: 'Jamie', time: '11:40' },
        { rank: 6, username: 'Alexis', time: '11:20' },
        { rank: 7, username: 'Riley', time: '11:15' },
        { rank: 8, username: 'Morgan', time: '11:02' },
        { rank: 9, username: 'Taylor', time: '10:50' },
        { rank: 10, username: 'Avery', time: '10:43' },
    ];
    
    const leaderboardQUAD = [
        { rank: 1, username: 'Jamie', time: '13:00' },
        { rank: 2, username: 'Casey', time: '12:20' },
        { rank: 3, username: 'Skylar', time: '11:58' },
        { rank: 4, username: 'Taylor', time: '11:47' },
        { rank: 5, username: 'Jordan', time: '11:33' },
        { rank: 6, username: 'Hayden', time: '11:28' },
        { rank: 7, username: 'Cameron', time: '11:14' },
        { rank: 8, username: 'Finley', time: '11:09' },
        { rank: 9, username: 'Drew', time: '10:55' },
        { rank: 10, username: 'Charlie', time: '10:50' },
    ];

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
        <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
                padding: 4,
                pt: 0,
                gap: 4,      // Space between the two main boxes
                maxWidth: '100%',
            }}
        >
            {/* Campus Map Card */}
            <Card
                variant="outlined"
                sx={{
                    borderRadius: "10px",
                    width: "50%",      // Set width to balance the layout
                    padding: 2,
                }}
            >
                <CardContent>
                    <Typography
                        fontFamily="Mulish"
                        variant="h5"
                        component="div"
                        align="center"
                        sx={{ marginBottom: 3 }}
                    >
                        <b>Time Spent at Buildings on Campus</b>
                    </Typography>
                    <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <img
                            src={aerialView}
                            alt="Campus Map"
                            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                        />
                        <Button
                            onClick={() => handleOpen(leaderboardGDC, "GDC Gladiator Leaderboard")}
                            sx={{
                                position: 'absolute',
                                top: '35%',   // Set to the desired spot on the image
                                left: '20%',  // Adjust based on where you want the pin on the map
                                transform: 'translate(-50%, -50%)', // Center pin on the coordinates
                                width: '2%',  // Scale button size with image
                                aspectRatio: '1',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                },
                            }}
                        >
                            <MapPin size={32} fill="dark-red" color="white" />
                        </Button>
                        <Button
                                onClick={() => handleOpen(leaderboardJEN, "Jendy's Jampion Leaderboard")}
                            sx={{
                                position: 'absolute',
                                top: '25%',   // Set to the desired spot on the image
                                left: '33%',  // Adjust based on where you want the pin on the map
                                transform: 'translate(-50%, -50%)', // Center pin on the coordinates
                                width: '2%',  // Scale button size with image
                                aspectRatio: '1',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                },
                            }}
                        >
                            <MapPin size={32} fill="dark-red" color="white" />
                        </Button>
                        <Button
                            onClick={() => handleOpen(leaderboardQUAD, "Quad Questmaster Leaderboard")}
                            sx={{
                                position: 'absolute',
                                top: '60%',   // Set to the desired spot on the image
                                left: '64%',  // Adjust based on where you want the pin on the map
                                transform: 'translate(-50%, -50%)', // Center pin on the coordinates
                                width: '2%',  // Scale button size with image
                                aspectRatio: '1',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                },
                            }}
                        >
                            <MapPin size={32} fill="dark-red" color="white" />
                        </Button>
                        <Button
                            onClick={() => handleOpen(leaderboardQUAD, "DKR Dominator Leaderboard")}
                            sx={{
                                position: 'absolute',
                                top: '25%',   // Set to the desired spot on the image
                                left: '4%',  // Adjust based on where you want the pin on the map
                                transform: 'translate(-50%, -50%)', // Center pin on the coordinates
                                width: '2%',  // Scale button size with image
                                aspectRatio: '1',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                },
                            }}
                        >
                            <MapPin size={32} fill="dark-red" color="white" />
                        </Button>
                        <Button
                            onClick={() => handleOpen(leaderboardJEN, "Tower Titan Leaderboard")}
                            sx={{
                                position: 'absolute',
                                top: '35%',   // Set to the desired spot on the image
                                left: '50%',  // Adjust based on where you want the pin on the map
                                transform: 'translate(-50%, -50%)', // Center pin on the coordinates
                                width: '2%',  // Scale button size with image
                                aspectRatio: '1',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                },
                            }}
                        >
                            <MapPin size={32} fill="dark-red" color="white" />
                        </Button>
                        <Button
                            onClick={() => handleOpen(leaderboardQUAD, "Undefeated Unionist Leaderboard")}
                            sx={{
                                position: 'absolute',
                                top: '35%',   // Set to the desired spot on the image
                                left: '70%',  // Adjust based on where you want the pin on the map
                                transform: 'translate(-50%, -50%)', // Center pin on the coordinates
                                width: '2%',  // Scale button size with image
                                aspectRatio: '1',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent background
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                },
                            }}
                        >
                            <MapPin size={32} fill="dark-red" color="white" />
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            {/* Profile & Leaderboard Card */}
            <Box sx={{ width: '45%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Profile Card */}
                <Card variant="outlined" sx={{ padding: 2, borderRadius: '10px', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                            src={userPfp}
                            sx={{
                                height: 80,
                                width: 80,
                                bgcolor: 'grey.300',
                                mr: 2,
                            }}
                        >
                            A
                        </Avatar>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ fontSize: "1.5rem" }} variant="h6">Gon</Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Typography variant="body2"><strong>#4</strong> Friends</Typography>
                                <Typography variant="body2"><strong>#1</strong> Nearby</Typography>
                                <Typography variant="body2"><strong>#1071</strong> Global</Typography>
                            </Box>
                        </Box>
                        <Typography sx={{ fontSize: '3rem', fontWeight: 'bold', ml: 'auto' }}>{userPoints}</Typography>
                    </Box>
                </Card>

                {/* Leaderboard Card */}
                <Card variant="outlined" sx={{ borderRadius: '10px' }}>
                    <CardContent>
                        <Tabs
                            fontFamily="Mulish"
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="secondary"
                            variant="fullWidth"
                        >
                            <Tab label="Friends" />
                            <Tab label="Nearby" />
                            <Tab label="Global" />
                        </Tabs>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'flex-end',
                                mt: 2,
                                height: '210px',
                                position: 'relative',
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

                        <Box sx={{ mt: 2, maxHeight: '300px', overflowY: 'auto', bgcolor: '#ffffff50' }}>
                            {listItems.map((item, index) => (
                                <ListItem
                                    key={index}
                                    rank={item.username === userName && value === 2 ? 1071 : index + 4}
                                    username={item.username}
                                    isHighlighted={item.username === userName}
                                    score={item.score}
                                />
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {currentLeaderboard.map((entry, index) => {
                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        p: 1,
                                        bgcolor: index % 2 === 0 ? 'grey.100' : 'white',
                                        borderRadius: 1,
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 'bold', width: '10%' }}>{entry.rank}</Typography>
                                    <Avatar sx={{ bgcolor: avatarColorsState[index], mr: 2 }}>
                                        {entry.username[0]}
                                    </Avatar>
                                    <Typography sx={{ flex: 1 }}>{entry.username}</Typography>
                                    <Typography>{entry.time}</Typography>
                                </Box>
                            );
                        })}
                    </Box>
                </DialogContent>
            </Dialog>
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
                boxShadow: username === '1st Place User' || username === userName || username === 'HuangJ' ? `-2px -2px 4px ${'gold'}, 2px -2px 4px ${'gold'}, -2px -2px 4px ${'gold'}` :
                        username === '2nd Place User' || username === 'Hu Tao' ? `-2px -2px 4px ${'silver'}, 2px -2px 4px ${'silver'}, -2px -2px 4px ${'silver'}` :
                        username === '3rd Place User' || username === 'Guts' ? `-2px -2px 4px ${'#cd7f32'}, 2px -2px 4px ${'#cd7f32'}, -2px -2px 4px ${'#cd7f32'}` : undefined,
                height: username === '1st Place User' || username === userName || username === 'HuangJ' ? '110px' :
                        username === '2nd Place User' || username === 'Hu Tao' ? '90px' :
                        username === '3rd Place User' || username === 'Guts' ? '70px' : '0px',
                bgcolor: username === '1st Place User' || username === userName || username === 'HuangJ' ? 'gold' :
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
                top: username === '1st Place User' || username === userName || username === 'HuangJ' ? '-65px' :
                    username === '2nd Place User' || username === 'Hu Tao' ? '-45px' :
                    username === '3rd Place User' || username === 'Guts' ? '-25px' : '0px',
                width: 80,
                height: 80,
                zIndex: 1
            }}
        />

        {/* New Box for spacing the text */}
        <Box sx={{
            mb: username === '1st Place User' || username === userName || username === 'HuangJ' ? '45px' :
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
            bgcolor: isHighlighted ? '#81F2FF50' : '#a3e5ff25',
            borderRadius: 1,
            fontWeight: isHighlighted ? 'bold' : 'normal',
            justifyContent: 'space-between', // Added for spacing
        }}
    >
        <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 2 }}>
            {rank}
        </Typography>
        <Avatar src={username === userName ? userPfp : undefined} sx={{ bgcolor: 'grey.300', mr: 1 }}>A</Avatar>
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