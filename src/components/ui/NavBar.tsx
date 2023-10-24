import React from 'react';
import { AppBar, Toolbar, Link, Typography, Box, Button, IconButton, Badge } from '@mui/material';
import NextLink from 'next/link';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export const NavBar = () => {
  return (
    <AppBar>
        <Toolbar>
            <Link component={ NextLink } href='/'>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6'>Teslo |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Box>
            </Link>
            
            <Box flex={ 1 }/>
          
            <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
                <Link component={ NextLink } href='/category/men'>
                    <Button>Hombre</Button>
                </Link>
                <Link component={ NextLink } href='/category/women'>
                    <Button>Mujeres</Button>
                </Link>
                <Link component={ NextLink } href='/category/kid'>
                    <Button>Niños</Button>
                </Link>
            </Box>
        
            <Box flex={ 1 }/>

            <IconButton>
                <SearchOutlined/>
            </IconButton>
            <Link component={ NextLink } href='/'>
                <IconButton>
                    <Badge badgeContent={ 2 } color='secondary'>
                        <ShoppingCartOutlined />
                    </Badge>
                </IconButton>
            </Link>
            <Button>
                Menu
            </Button>
        </Toolbar>
    </AppBar>
  )
}
