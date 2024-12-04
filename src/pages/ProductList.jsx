import React from "react";
import { Link } from "react-router-dom";
import products from "../products";
import { useCart } from "../context/CartContext";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mb: 3, textAlign: "right" }}>
        <Button variant="outlined" component={Link} to="/cart">
          View Cart
        </Button>
      </Box>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}>
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: "contain",
                  backgroundColor: "white",  // Ensures the image covers the entire area without distortion
                }}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
                  {product.price} LKR
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
