import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Avatar, List, ListItem, ListItemAvatar, ListItemText, Button, Grid2, Paper, TextField, CardActionArea   } from '@mui/material';
import { CardMedia, Chip} from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import DailyPollCard from './DailyPollCard';
import utTowerImage from '../images/ut-tower.png';

const QuestCard = ({ image, title, rarity, likes, shares, completes, category}) => {
    return (
        <Card variant="outlined" className="quest-card" style={{ height: '380px', width: 'auto', transition: 'transform 0.3s ease'}}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
                style={{ objectFit: 'cover', height: '150px', margin: 0, padding: 0 }}
            />
            <CardContent style={{marginLeft: 5, padding: 5 }}>
                <div>
                    <Typography
                        fontFamily="Mulish, sans-serif"
                        fontSize="18px"
                        fontWeight="bold"
                        style={{ margin: '0', padding: '0' }}
                    >
                        {title}
                    </Typography>
                    <div>
                    <Chip 
                        label={rarity}
                        color={rarity === "Rare" ? "warning" : "primary"}
                        style={{
                            marginLeft: 0,
                            marginRight: 2,
                            height: '25px',
                            fontSize: '12px',
                            fontFamily: 'Mulish, sans-serif'
                        }}
                    />
                    <Chip 
                        label={category}
                        style={{
                            backgroundColor: 'lightblue',
                            margin: 5,
                            height: '25px',
                            fontSize: '12px',
                            fontFamily: 'Mulish, sans-serif'
                        }}
                    />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '10px'}}>
                    <Button
                        variant='contained'
                    >
                        <b
                            style={{
                                color: 'white',
                                fontFamily: 'Mulish, sans-serif'
                            }}
                        >
                            Start
                        </b>
                    </Button>
                </div>

                <hr style={{ margin: '5px 0', border: '1px solid #ccc' }} />

                <div>
                    <Typography
                        fontFamily="Mulish, sans-serif"
                        fontSize="20px"
                        style={{ margin: '0', padding: '0' }}
                    >
                    <b style={{ fontSize: '12.8px' }}>{likes}</b>&nbsp;<span style={{ fontSize: '12.8px' }}>likes</span>&nbsp;
                    <b style={{ fontSize: '12.8px' }}>{shares}</b>&nbsp;<span style={{ fontSize: '12.8px' }}>recruits</span>&nbsp;
                    <b style={{ fontSize: '12.8px' }}>{completes}</b>&nbsp;<span style={{ fontSize: '12.8px' }}>completes</span>
                    </Typography>
                </div>

                <hr style={{ margin: '5px 0', border: '1px solid #ccc' }} />
            
                <div style={{ display: 'flex', justifyContent: 'center', margin: 0, paddingTop: 5 }}>
                    <Button 
                        variant="text" 
                        color="primary" 
                        style={{width: '100px'}}
                    >
                        <Heart style={{ width: '40px' }} />
                    </Button>
                    <Button 
                        variant="text" 
                        color="primary" 
                        style={{width: '100px'}}
                    >
                        <MessageCircle style={{ width: '40px' }} />
                    </Button>
                    <Button 
                        variant="text" 
                        color="primary" 
                        style={{width: '100px'}}
                    >
                        <Share2 style={{ width: '40px' }} />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const HomePage = () => {
    const [fetchedAchievements, setRecentAchievements] = useState([]);
    const [value, setValue] = useState('')
    const [quest, setQuest] = useState('')

    const handleClear = () => {
        setValue('')
        setQuest('')
    }

    const handleSearch = (event) => {
        setValue(event.target.value)
    }

    const handleQuest = (event) => {
        setQuest(event.target.value)
    }

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
          level: 5,
          rank: "Beginner",
          postImage: require("../images/swim-meet.JPG"),
          title: "Watching some people swim",
          description: "Didn't realize watching people swim fast could be so entertaining. 10/10 swim meet.",
        },
        {
          id: 2,
          friendName: "Hu Tao",
          profilePicture: "https://wallpapers.com/images/hd/cool-anime-girl-pfp-hu-tao-6cjtrrhyvr2g24ik.jpg",
          level: 16,
          rank: "Intermediate",
          postImage: require("../images/pma-top.JPG"),
          title: "Visited the top of the PMA!",
          description: "The view of the campus was beautiful!",
        },
        {
        id: 2,
        friendName: "HuangJ",
        profilePicture: "https://th.bing.com/th/id/OIP.91GgEkbkpDaQ-Vv-7JeXGAHaE6?rs=1&pid=ImgDetMain",
        level: 42,
        rank: "Advanced",
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
                    <Typography variant="h4" align="left" gutterBottom>
                        <b style={{fontFamily: 'Mulish, sans-serif'}}>Quest Feed</b>
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {/* Sample social media posts from friends */}
                        {friendPosts.map((post) => (
                        <Card key={post.id} variant="outlined" sx={{ borderRadius: '10px', paddingTop: 2, paddingRight: 2, paddingLeft: 2 }}>
                            <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar alt={post.friendName} src={post.profilePicture} sx={{ mr: 2 }} />
                                <Typography variant="h6" component="div" sx={{fontFamily: "mulish", mr: 2}}>
                                    {post.friendName}
                                </Typography>
                                <Typography component="div" sx={{color: "gray", fontFamily: "mulish"}}>
                                    {"Level " + post.level + " | " + post.rank}
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
                    <Typography variant="h4" align="left" gutterBottom>
                        <b style={{fontFamily: 'Mulish, sans-serif'}}>Daily Poll</b>
                    </Typography>
                    {/* Limited quests Section */}
                    <DailyPollCard />

                    {/* Recent Achievements Section */}
                    <Card variant="outlined" sx={{ borderRadius: '10px', display: 'flex', flexDirection: 'column', mb: 3 }}>
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
                    <Typography fontFamily='mulish' variant="h5" sx={{mb: 2}}>Recommended Quest</Typography>
                    <QuestCard
                    image={utTowerImage}
                    title="Visit the UT Tower"
                    rarity="Common"
                    likes="14.7k"
                    shares="5.5k"
                    completes="25.2k"
                    category="General"
                    />
                    <Paper variant="outlined" sx={{ mt: 3, p: 4, borderRadius: '8px', textAlign: 'center' }}>
                        <Typography variant="h5" component="h2" sx={{ mb: 2, fontFamily: "Mulish"}}>
                            Submit a Quest
                        </Typography>
                        <Box component="form" noValidate autoComplete="off">
                            <TextField
                            fullWidth
                            value={quest}
                            label="Quest Name"
                            variant="outlined"
                            margin="normal"
                            onChange={handleQuest}
                            />
                            <TextField
                            value={value}
                            multiline
                            fullWidth
                            label="Description"
                            rows={4}
                            variant="outlined"
                            margin="normal"
                            onChange={handleSearch}
                            sx = {{mb: 2}}
                            />
                            <CardActionArea component={Link} to="/home">
                            <Button
                                onClick = {handleClear}
                                fullWidth
                                variant="contained"
                                sx={{
                                backgroundColor: '#81F2FF',
                                color: 'black',
                                fontFamily: "Mulish",
                                fontWeight: 'bold',
                                '&:hover': { backgroundColor: '#89cfee' }
                                }}
                            >
                                Submit
                            </Button>
                            </CardActionArea>
                        </Box>
                    </Paper>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default HomePage;
