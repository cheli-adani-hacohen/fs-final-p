import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Menu as MenuIcon } from '@mui/icons-material';


function AppMenu(props) {
  const { userId, handleLogout } = props;
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const pages = ['Home', 'Categories', 'About'];
  const ITEM_HEIGHT = 48;

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

  const settings = [
    { name: 'Profile', href: `/users/${userId}/profile` },
    { name: 'Cart', href: `/users/${userId}/cart` },
    { name: 'WishList', href: `/users/${userId}/wishlist` },
    { name: 'Logout' },
  ];

  const Login = [{ name: 'Login', href: '/login' }];

  const allPages = (page) => {
    return (<MenuItem
      key={page}
      component={NavLink} // הוסף קו־תחתי כדי להתעלם מהאזהרה שמתקבלת
      to={`/${page.toLowerCase()}`} // הנתיב הרלוונטי
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      {page}
    </MenuItem>
    );
  }
 
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Navigation menu for larger screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              allPages(page)
            ))}
          </Box>
          {/* Navigation menu for small screens */}
        {/* Navigation menu for small screens */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={openDrawer}
              onClose={toggleDrawer(false)}
            >
              <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {pages.map((page) => (
                    <ListItem
                      button
                      key={page}
                      component={NavLink}
                      to={`/${page.toLowerCase()}`}
                      onClick={handleCloseNavMenu}
                    >
                      <ListItemIcon>
                        {/* Add an icon if desired */}
                      </ListItemIcon>
                      <ListItemText primary={page} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>
          </Box>

          {/* Logo and site title */}
          <Box
          sx={{ flexGrow: 1, textAlign: 'center' }}
            display="flex"
            alignItems="center" // הוספת יישור אנכי למרכז הרכיבים
          >
            <AdbIcon
              sx={{
                display: { xs: 'block', md: 'flex' },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', sm: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </Box>

          {/* User settings menu */}
          {(userId !== null) ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                  setting.name !== 'Logout' ? (
                    <MenuItem
                      key={setting.name}
                      component={NavLink}
                      to={setting.href}
                      onClick={handleCloseUserMenu}
                    >
                      <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem key={setting.name} onClick={() => { handleLogout() }}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  )
                ))}
              </Menu>
            </Box>
          ) : (<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Login.map((loginItem) => (
              <Button
                key={loginItem.name}
                component={NavLink}
                to={loginItem.href}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {loginItem.name}
              </Button>
            ))}
          </Box>)}

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppMenu;
