import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PlaceIcon from '@mui/icons-material/Place';
import "@fontsource/mulish";
import { Link } from 'react-router-dom';
import { CardActionArea } from "@mui/material";
import userPfp from '../images/user-pfp.webp';

const pages = ['Quests', 'Leaderboard'];
const settings = ['Profile', 'Log Out'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#81F2FF", boxShadow: '0 0 5px #81F2FF, 0 0 70px #81F2FF, 0 0 75px #81F2FF', border: 'solid 1px black',}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <PlaceIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
              <Typography
                  variant="h6"
                  noWrap
                  component="span" // Change to span for better semantics
                  sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'Mulish',
                      color: 'black',
                      textDecoration: 'none',
                  }}
              >
                  side quest
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1 }}/>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <CardActionArea component={Link} to={`/${page.toLowerCase()}`}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}> 
                        <Typography sx={{ color: 'black', textAlign: 'center', fontFamily: 'Mulish'}}>{page}</Typography>
                    </MenuItem>
                  </CardActionArea>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                  <CardActionArea component={Link} to={`/${page.toLowerCase()}`}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ mx: 1, my: 2, color: 'black', display: 'block', fontFamily: 'Mulish' }}
                    >
                      {page}
                    </Button>
                  </CardActionArea>
              ))}
            </Box>
            <Box sx={{ ml: 2, flexGrow: 0 }}>
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    src={userPfp}
                    sx={{
                        bgcolor: 'grey.300',
                        margin: 'auto 0',
                    }}
                />
                </IconButton>
              </Tooltip>
              <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <CardActionArea component={Link} to={`/${setting.toLowerCase()}`}>
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center', fontFamily: 'mulish' }}>{setting}</Typography>
                  </MenuItem>
                </CardActionArea>
              ))}
            </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{margin: 9}}/>
    </>
  );
}
export default ResponsiveAppBar;
