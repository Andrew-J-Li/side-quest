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
        }}
      >

        {/* Login Form */}
        <Paper variant="outlined" sx={{ mt: 10, p: 4, borderRadius: '8px', width: '60%', textAlign: 'center' }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontFamily: "Mulish"}}>
            Sign in
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx = {{mb: 2}}
            />
            <CardActionArea component={Link} to="/home">
              <Button
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