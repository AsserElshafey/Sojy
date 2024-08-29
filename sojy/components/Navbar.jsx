import { AppBar, Box, Toolbar, Typography, Button, IconButton, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
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