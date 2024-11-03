import React, { useRef, useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box, Button } from '@mui/material';
import './quests.css';
import gatesDellImage from '../images/gates-dell-complex.jpg';
import utTowerImage from '../images/ut-tower.png';
import heartIcon from '../images/heart.png';
import shareIcon from '../images/share.png';

const Quests = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Cleanup the effect if needed
        return () => {
            document.head.removeChild(link);
        };
    }, []);

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

    const QuestCard = ({ image, title, rarity, likes, shares, completes, category}) => {
        return (
            <Card className="quest-card" style={{ height: '380px' }}>
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
                            fontSize="20px"
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
                                margin: 5,
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
                        <b style={{ fontSize: '14px' }}>{likes}</b>&nbsp;<span style={{ fontSize: '14px' }}>likes</span>&nbsp;
                        <b style={{ fontSize: '14px' }}>{shares}</b>&nbsp;<span style={{ fontSize: '14px' }}>shares</span>&nbsp;
                        <b style={{ fontSize: '14px' }}>{completes}</b>&nbsp;<span style={{ fontSize: '14px' }}>completes</span>
                        </Typography>
                    </div>

                    <hr style={{ margin: '5px 0', border: '1px solid #ccc' }} />
                
                    <div style={{ display: 'flex', justifyContent: 'center', margin: 0, padding: 0 }}>
                        <Button variant="text" color="primary" style={{ width: '100px' }}>
                            <img
                                src={heartIcon}
                                style={{ height: '40px', width: 'auto' }}
                                alt="Heart Icon"
                            />
                        </Button>
                        <Button variant="text" color="secondary" style={{ width: '100px' }}>
                            <img
                                src={shareIcon}
                                style={{ height: '40px', width: 'auto' }}
                                alt="Share Icon"
                            />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    };


    return (
        <>
        <div style={{paddingLeft: '100px', paddingRight: '100px', display: 'flex', justifyContent: 'center'}}>
            <div className="main-content" style={{textAlign: 'left', width: 'fit-content'}}>
                <Typography variant="h4" align="left" gutterBottom>
                    <b style={{fontFamily: 'Mulish, sans-serif'}}>Daily Quest</b>
                </Typography>
                <div 
                    className="daily-quests-container"
                    ref={scrollContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    <div style={{width: '50%', float: 'left'}}>
                        <img
                            src={gatesDellImage}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '25px 0 0 25px',
                            }}
                        />
                    </div>
                    <div style={{width: '50%', float: 'right', border: 'solid 1px gray', borderRadius: '0 25px 25px 0'}}>
                        <p style={{margin: 10, fontWeight: 'bold', fontSize: '20px'}}>
                            Visit the Gates-Dell Complex
                        </p>
                        <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 0, marginBottom: 0, display: 'flex'}}>
                            <div>
                                <Chip 
                                    label='Rare'
                                    color="warning"
                                    style={{
                                        width: '55px',
                                        height: '25px',
                                        fontSize: '12px',
                                        fontFamily: 'Mulish, sans-serif'
                                    }}
                                />
                            </div>
                            <div style={{marginLeft: 10}}>
                                <Chip
                                    label='Computer Science'
                                    style={{
                                        backgroundColor: 'lightblue',
                                        width: '125px',
                                        height: '25px',
                                        fontSize: '12px',
                                        fontFamily: 'Mulish, sans-serif'
                                    }}
                                />
                            </div>

                        </div>
                        <p style={{textAlign: 'left', marginLeft: 15, marginRight: 15, fontFamily: 'Mulish, sans-serif'}}>Explore the iconic Gates-Dell Complex (GDC), home to UT Austin's Computer Science department. This modern architectural marvel houses cutting-edge research labs, collaborative spaces, and the technical heart of campus. Complete this quest by visiting the building and discovering its innovative learning environments.</p>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '20px' }}>
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
                        <hr style={{marginTop: 10}}>
                        </hr>
                        <div style={{textAlign: 'left', marginLeft: 20, fontFamily: 'Mulish, sans-serif'}}>
                            <b>3.1k</b> likes <b>1.1k</b> Recruits <b>11.4k</b> Completions
                        </div>
                        <hr style={{ marginBottom: 0 }} />
                        <Box display="flex" justifyContent="space-evenly"
                            style={{
                                marginLeft: 20, marginRight: 20, marginTop: 0
                            }}
                        >
                            <Button 
                                variant="text" 
                                color="primary" 
                                style={{width: '100px'}}
                            >
                                <img
                                    src={heartIcon}
                                    style = {{
                                        width: '40px'
                                    }}
                                />
                            </Button>
                            <Button 
                                variant="text" 
                                color="secondary"
                                style={{width: '100px'}}
                            >
                                <img
                                    src={shareIcon}
                                    style = {{
                                        width: '40px'
                                    }}
                                />
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-content">
            <Typography variant="h4" align="center" gutterBottom>
                <b style={{fontFamily: 'Mulish, sans-serif'}}>
                    All Quests
                </b>
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
                    likes="3.1k"
                    shares="1.1k"
                    completes="11.4k"
                    category="Computer Science"
                />
                <QuestCard
                    image={utTowerImage}
                    title="Visit the UT Tower"
                    rarity="Common"
                    likes="14.7k"
                    shares="5.5k"
                    completes="25.2k"
                    category="General"
                />
                {/* Add more quest cards as needed */}
            </div>
        </div>
        </>
    );
};

export default Quests;