import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
  <>
  <div className="navbar-container">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        style={{  
          background: 'rgba(0,0,0,0.0)',
          borderTopWidth: 0,
          }}>
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <div className="btn"> 
            <Button varient="outlined" style={{color: '#000000'}}>Gallery</Button>
            <Button varient="contained" style={{color: '#000000'}}>About Me</Button>
            <Button varient="text" style={{color: '#000000'}}>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  </>
);
}

