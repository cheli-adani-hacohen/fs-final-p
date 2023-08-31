// import React from 'react';
// import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
// import StarIcon from '@material-ui/icons/Star';

// const ProductCard = ({ category, description, discount, image, price, rating_count, rating_rate, title }) => {
//   return (
//     <Card>
//       <CardMedia component="img" alt={title} height="200" image={image} />
//       <CardContent>
//         <Typography variant="h6">{title}</Typography>
//         <Typography variant="body2">{category}</Typography>
//         <Typography variant="body1">{description}</Typography>
//         <Typography variant="body2">Price: {price}</Typography>
//         <Typography variant="body2">Rating: {rating_rate} <StarIcon /> ({rating_count} reviews)</Typography>
//         {discount > 0 && <Typography variant="body2">Discount: {discount}%</Typography>}
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function ProductCard({
    product,
    onAddToCart,
    onRemoveFromCart,
    onAddQuantity,
    onSubtractQuantity,
    cartQuantity
}) {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={product.title}
                height="140"
                image={product.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${ parseFloat(product.price).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Description: {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Category: {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rating: {product.rating_rate} ({product.rating_count} ratings)
                </Typography>
            </CardContent>
            <CardActions>
                {cartQuantity > 0 ? (
                    <>
                        <Button
                            variant="contained"
                            startIcon={<RemoveIcon />}
                            onClick={() => onSubtractQuantity(product.id)}
                        >
                            Subtract
                        </Button>
                        <Typography variant="body2" color="text.secondary">
                            Quantity: {cartQuantity}
                        </Typography>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={() => onAddQuantity(product.id)}
                        >
                            Add
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<ShoppingCartIcon />}
                            onClick={() => onRemoveFromCart(product.id)}
                        >
                            Remove from Cart
                        </Button>
                    </>
                ) : (
                    <Button
                        variant="contained"
                        startIcon={<ShoppingCartIcon />}
                        onClick={() => onAddToCart(product.id)}
                    >
                        Add to Cart
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default ProductCard;
