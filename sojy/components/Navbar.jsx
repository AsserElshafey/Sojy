'use client'
import { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, TextField, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 240,
              },
            }}
          >
            hello world
          </Drawer>
          <img src="../images/Logo.png" alt="Logo" width={50} height={50} />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}
            className='text-black ml-2'
          >
            Sojy
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <IconButton
              size="middle"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: 'black' }}
            >
              <SearchIcon />
            </IconButton>
            <TextField id="input-with-sx" label="Search" variant="standard" />
          </Box>
          <Button color="inherit" className='text-black'>Login</Button>
          <Button color="inherit" className='text-black'>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar