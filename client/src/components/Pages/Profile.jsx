import React, { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';


import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Card, CardContent, Grid, Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';

import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton';

function Profile() {
  const theme = useTheme();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  if (!userData) return <div>Loading...</div>;

  const address = userData.address || {};

  return (
<Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  height="88vh"
  width="100vw"


>
  <Box
     style={{
      padding: '2rem',  // המרווח הפנימי
      border: '2px solid black',  // הגבול
      boxSizing: 'content-box', // כדי שה-padding וה-border יתווספו לרוחב וגובה, ולא יחסכו מהם
      width: 'calc(100% - 4rem)', // 100% מרוחב האב פחות ה-padding וה-border
      height: 'calc(100% - 4rem)', // 100% מגובה האב פחות ה-padding וה-border
      overflow: 'hidden'
    }}
    >
      <Card >
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt={`${userData["name.firstname"]} ${userData["name.lastname"]}`}
              src={userData["profile_picture"]} // Change is made here
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4">
              {userData["name.firstname"]} {userData["name.lastname"]}
            </Typography>
            <Typography variant="subtitle1">
              <a href={`mailto:${userData.email}`}>{userData.email}</a>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Typography variant="h6">Address:</Typography>
        <Typography>
          {address.number} {address.street}, {address.city}, {address.zipcode}
        </Typography>
      </CardContent>
    </Card>
  </Box>
</Box>
    // <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    //   <Container maxWidth="lg"  height="80vh">
    //     <Box border="1px solid black" padding={2}>
    //       <Typography variant="h4" align="center">
    //         This content is centered and framed!
    //       </Typography>
    //     </Box>
    //   </Container>
    // </Box>
    // <Box 
    //   sx={{
    //     display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", bgcolor:"lightblue",
    //     p:2
    //   }}>
    //   <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
    //     <CardContent sx={{ flex: '1 0 auto' }}>
    //       <Typography component="div" variant="h5">
    //         Live From Space
    //       </Typography>
    //       <Typography variant="subtitle1" color="text.secondary" component="div">
    //         Mac Miller
    //       </Typography>
    //     </CardContent>
    //     <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
    //       <IconButton aria-label="previous">
    //         {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
    //       </IconButton>
    //       <IconButton aria-label="play/pause">
    //         <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    //       </IconButton>
    //       <IconButton aria-label="next">
    //         {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
    //       </IconButton>
    //     </Box>
    //   </Box>
    //   <CardMedia
    //     component="img"
    //     sx={{ width: 151 }}
    //     image="/static/images/cards/live-from-space.jpg"
    //     alt="Live from space album cover"
    //   />
    // </Box>
  );
}

export default Profile;
{/* <Card>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt={`${userData["name.firstname"]} ${userData["name.lastname"]}`}
              src={userData["profile_picture"]} // Change is made here
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4">
              {userData["name.firstname"]} {userData["name.lastname"]}
            </Typography>
            <Typography variant="subtitle1">
              <a href={`mailto:${userData.email}`}>{userData.email}</a>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Typography variant="h6">Address:</Typography>
        <Typography>
          {address.number} {address.street}, {address.city}, {address.zipcode}
        </Typography>
      </CardContent>
    </Card> */}