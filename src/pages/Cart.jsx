import React from "react";
import { useCart } from "../context/CartContext";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/Styles.css";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        //<Typography variant="h6">Your cart is empty.</Typography>
        <div className="image-container">
            <img src="/images/cart.jpg" alt="Cart"></img>
        </div>
      ) : (
        <>
          <Grid container spacing={2}>
            {cart.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Card sx={{ display: "flex", alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1">{item.price} LKR</Typography>
                    <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                      <TextField
                        type="number"
                        size="small"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, Math.max(1, +e.target.value))
                        }
                        sx={{ width: 60, mr: 2 }}
                      />
                      <IconButton
                        onClick={() => removeFromCart(item.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              Total: <strong>{calculateTotal().toFixed(2)} LKR</strong>
            </Typography>
            <Button variant="contained" color="primary">
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
