import NextLink from 'next/link';
import { ShopLayout } from '@/components/layout';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';
import React from 'react';

const EmptyPage = () => {
  return (
    <ShopLayout title='Carrito Vacio' pageDescription='No hay articulos en el carrito de compras'>
        <Box 
            display='flex' 
            justifyContent='center' 
            alignItems='center'
            height='calc(100vh - 200px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
            <RemoveShoppingCartOutlined sx={{ fontSize: 100 }}/>
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Typography>Su carrito esta Vacio</Typography>
                <Link component={NextLink} href='/' typography='h4' color='secondary'>
                    Regresar
                </Link>
            </Box>
        </Box>
    </ShopLayout>
  )
}

export default EmptyPage;