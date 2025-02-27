// src/components/ItemListContainer.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const ItemListContainer = ({ greeting }) => {
return (
    <Container>
    <Typography variant="h4" align="center" style={{ marginTop: '20px' }}>
        {greeting}
    </Typography>
    </Container>
);
};

export default ItemListContainer;
