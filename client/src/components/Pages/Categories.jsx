import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { } from 'react-router-dom';

import { Container, Grid, Card, CardContent, Typography, CardMedia, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products/${modifiedString(category.name)}`, { state: category });
  };

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories"));

    if (storedCategories) {
      setCategories(storedCategories);
    } else {
      fetch('http://localhost:3500/api/categories') // Change the URL to match your server route
        .then(response => response.json())
        .then(data => {
          setCategories(data);
          localStorage.setItem("categories", JSON.stringify(data));
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item key={category.id} xs={12} sm={6} md={4}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia component="img" image={category.imageUrl} alt={category.name} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2">
                    {category.name}
                  </Typography>
                </CardContent>
                <Link to={`/products/${category.id}`} style={{ textDecoration: 'none' }}>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ p: 2, textAlign: 'center', cursor: 'pointer' }}>
                    {category.name}
                  </Typography>
                </Link>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Categories;

function modifiedString (stroriginalString){
  return stroriginalString.toLowerCase().replace(/\s/g, '');
}