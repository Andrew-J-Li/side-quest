import React from 'react';

// Helper component to handle the section layout
const Section = ({ background, children, style }) => (
  <section style={{ background, padding: '60px 20px', textAlign: 'center', ...style }}>
    {children}
  </section>
);

const Preview = () => {
  return (
    <div style={{ margin: 0, fontFamily: 'Mulish, sans-serif', backgroundColor: '#f9f9f9' }}>
      {/* Header Section */}
      <header style={{ background: '#ffffff', textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>
          This is <span style={{ color: "#81F2FF" }}>Exploration</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#666', marginBottom: '20px' }}>
          Incentivizing UT Austin students to discover, explore, and connect.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center', fontSize: '18px' }}>
            <strong>1000+</strong><br />Quests Completed
          </div>
          <div style={{ textAlign: 'center', fontSize: '18px' }}>
            <strong>500+</strong><br />Events Posted
          </div>
          <div style={{ textAlign: 'center', fontSize: '18px' }}>
            <strong>100+</strong><br />Monthly Leaderboards
          </div>
        </div>
      </header>

      {/* About Section */}
      <Section background="white">
        <h2 style={{ fontSize: '36px', color: '#BF5700' }}>Discover, Connect, Earn</h2>
        <p style={{ maxWidth: '700px', margin: '20px auto', fontSize: '18px', color: '#666' }}>
          SideQuest is a platform for UT Austin students to discover hidden gems, earn rewards, and share their journey. Complete quests, earn points, and climb the leaderboard!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <img src="https://via.placeholder.com/250" alt="Austin Landscape" style={{ width: '250px', borderRadius: '8px' }} />
          <img src="https://via.placeholder.com/250" alt="Student Event" style={{ width: '250px', borderRadius: '8px' }} />
        </div>
      </Section>

      {/* How It Works Section */}
      <Section background="#f4f4f4">
        <h2 style={{ fontSize: '36px', color: '#333' }}>How It Works</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', marginTop: '30px' }}>
          <div style={{ width: '300px', textAlign: 'center', color: '#333' }}>
            <h3>1. Discover Quests</h3>
            <p>Find unique quests around campus and Austin, from landmarks to hidden spots.</p>
          </div>
          <div style={{ width: '300px', textAlign: 'center', color: '#333' }}>
            <h3>2. Complete and Earn</h3>
            <p>Earn rewards by completing quests and exploring the city.</p>
          </div>
          <div style={{ width: '300px', textAlign: 'center', color: '#333' }}>
            <h3>3. Post & Connect</h3>
            <p>Share your journey and see what others are discovering.</p>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="white">
        <h2 style={{ fontSize: '36px', color: '#333' }}>Features</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center', marginTop: '30px' }}>
          <div style={{ width: '300px', textAlign: 'center', color: '#333' }}>
            <h3>Questing System</h3>
            <p>Complete quests around the city and earn rewards.</p>
          </div>
          <div style={{ width: '300px', textAlign: 'center', color: '#333' }}>
            <h3>Leaderboard</h3>
            <p>Compete with friends and see who’s leading the exploration!</p>
          </div>
          <div style={{ width: '300px', textAlign: 'center', color: '#333' }}>
            <h3>Event Posting</h3>
            <p>Post events, like and comment, and connect with peers.</p>
          </div>
        </div>
      </Section>

      {/* Footer Section */}
      <footer style={{ background: '#333', color: '#fff', textAlign: 'center', padding: '20px 0', fontSize: '16px' }}>
        SideQuest © 2024 | Explore UT Austin and Earn Rewards!
      </footer>
    </div>
  );
};

export default Preview;
