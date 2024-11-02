import React, { useRef, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box, Button } from '@mui/material';
import '../components/quests.css';
import gatesDellImage from '../images/gates-dell-complex.jpg';

const Quests = () => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [dragStartTime, setDragStartTime] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        setDragStartTime(new Date().getTime());
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = (e) => {
        const dragEndTime = new Date().getTime();
        const dragDuration = dragEndTime - dragStartTime;
        
        // If the drag duration is less than 200ms, consider it a click
        if (dragDuration < 200) {
            // Check if the click was on a button
            if (e.target.tagName.toLowerCase() !== 'button') {
                const walk = (e.pageX - startX - scrollContainerRef.current.offsetLeft) * 2;
                if (Math.abs(walk) < 5) {
                    // Handle card click if needed
                }
            }
        }
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Separate component for action buttons to prevent drag interference
    const ActionButtons = ({ onLike, onShare, onComplete }) => {
        const handleButtonClick = (e, action) => {
            e.stopPropagation(); // Prevent event from bubbling up
            action();
        };

        return (
            <Box 
                display="flex" 
                justifyContent="space-between" 
                mt={2} 
                className="action-buttons"
            >
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={(e) => handleButtonClick(e, onLike)}
                >
                    Like
                </Button>
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    onClick={(e) => handleButtonClick(e, onShare)}
                >
                    Share
                </Button>
                <Button 
                    variant="contained" 
                    color="success" 
                    onClick={(e) => handleButtonClick(e, onComplete)}
                >
                    Complete
                </Button>
            </Box>
        );
    };

    const QuestCard = ({ image, title, rarity }) => {
        const handleCardLike = () => {
            console.log(`Liked: ${title}`);
            alert(`Liked: ${title}!`);
        };

        const handleCardShare = () => {
            console.log(`Shared: ${title}`);
            alert(`Shared: ${title}!`);
        };

        const handleCardComplete = () => {
            console.log(`Completed: ${title}`);
            alert(`Quest Completed: ${title}!`);
        };

        return (
            <Card className="quest-card">
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography 
                        variant="h5" 
                        component="div" 
                        className="quest-title"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    <Chip 
                        label={rarity} 
                        color={rarity === "Rare" ? "warning" : "primary"} 
                        className="quest-rarity"
                    />
                    <Box display="flex" justifyContent="space-between" mt={2}>
                        <Typography variant="body2" color="text.secondary">
                            <span className="icon">❤️</span>3.1k
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span className="icon">🔁</span>0.4k
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span className="icon">▶️</span>7.1k
                        </Typography>
                    </Box>
                    <ActionButtons 
                        onLike={handleCardLike}
                        onShare={handleCardShare}
                        onComplete={handleCardComplete}
                    />
                </CardContent>
            </Card>
        );
    };

    return (
        <>
        <div className="main-content">
            <Typography variant="h4" align="center" gutterBottom>
                Daily Quest
            </Typography>
            <div 
                className="daily-quests-container"
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <img
                    src={gatesDellImage}
                    style={{
                        width: '450px',
                        height: '250px',
                        objectFit: 'cover',
                        borderRadius: '25px 0 0 25px',
                    }}
                />
                <div style={{width: '450px', height: '250px', border: 'solid 1px gray', borderRadius: '0 25px 25px 0'}}>
                    <p style={{textAlign: 'left', marginLeft: 10, marginRight: 10}}>Explore the iconic Gates-Dell Complex (GDC), home to UT Austin's Computer Science department. This modern architectural marvel houses cutting-edge research labs, collaborative spaces, and the technical heart of campus. Complete this quest by visiting the building and discovering its innovative learning environments.</p>
                    <Chip 
                        label='Rare'
                        color={"warning"}
                        style={{
                            width: '300px'
                        }}
                    />
                </div>
            </div>
        </div>
        <div className="main-content">
            <Typography variant="h4" align="center" gutterBottom>
                All Quests
            </Typography>
            <div 
                className="quests-container"
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <QuestCard 
                    image={gatesDellImage} 
                    title="Visit the Gates-Dell Complex"
                    rarity="Rare"
                />
                {/* Add more quest cards as needed */}
            </div>
        </div>
        </>
    );
};

export default Quests;