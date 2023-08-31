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
import AddIcon from '@mui/icons-material/Add';

function Product({
    product,
    onAddToCart,
    onAddToWishlist
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
                <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => onAddToCart(product.id)}
                >
                    Add to Cart
                </Button>
                <ToggleButtonGroup
                    value={false} // You can set the value based on whether it's added to wishlist or not
                    exclusive
                >
                    <ToggleButton value={false} onClick={() => onAddToWishlist(product.id)}>
                        <AddIcon />
                        Add to Wishlist
                    </ToggleButton>
                </ToggleButtonGroup>
            </CardActions>
        </Card>
    );
}

export default Product;
