import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const ProductCard = ({ category, description, discount, image, price, rating_count, rating_rate, title }) => {
  return (
    <Card>
      <CardMedia component="img" alt={title} height="200" image={image} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{category}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body2">Price: {price}</Typography>
        <Typography variant="body2">Rating: {rating_rate} <StarIcon /> ({rating_count} reviews)</Typography>
        {discount > 0 && <Typography variant="body2">Discount: {discount}%</Typography>}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
