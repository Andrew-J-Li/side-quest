import React from 'react';
import { Container, Box, Typography, TextField, Button, Paper, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 5,
          backgroundColor: '#0d0d0d', // Dark background for arcade feel
          borderRadius: '8px',
          padding: '20px', // Extra padding for arcade touch
          boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)', // Glowing effect
        }}
      >

        {/* Login Form */}
        <Paper variant="outlined" sx={{ mt: 10, p: 4, borderRadius: '12px', width: '100%', textAlign: 'center', backgroundColor: '#1c1c1c', borderColor: '#81F2FF' }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontFamily: "Press Start 2P, cursive", color: '#81F2FF' }}>
            Sign in
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              sx={{
                input: {
                  backgroundColor: '#3c3c3c',
                  color: '#FFFFFF',
                },
                '& label': {
                  color: '#81F2FF',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#81F2FF',
                  },
                  '&:hover fieldset': {
                    borderColor: '#89cfee',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#89cfee',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{
                mb: 2,
                input: {
                  backgroundColor: '#3c3c3c',
                  color: '#FFFFFF',
                },
                '& label': {
                  color: '#81F2FF',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#81F2FF',
                  },
                  '&:hover fieldset': {
                    borderColor: '#89cfee',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#89cfee',
                  },
                },
              }}
            />
            <CardActionArea component={Link} to="/home">
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#81F2FF',
                  color: 'black',
                  fontFamily: "Press Start 2P, cursive",
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#89cfee' }
                }}
              >
                Sign In
              </Button>
            </CardActionArea>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default LoginPage;
