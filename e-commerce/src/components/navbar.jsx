// src/components/navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import CartWidget from './cartwidget';  // Importación en minúsculas

const Navbar = () => {
return (
    <AppBar position="static">
    <Toolbar>
        <Container>
        <Typography variant="h6">
            Mi E-commerce
        </Typography>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Tienda</Button>
        <Button color="inherit">Carrito</Button>
        <Button color="inherit">Mi Cuenta</Button>
        
        <CartWidget />
        </Container>
    </Toolbar>
    </AppBar>
);
};

export default Navbar;
