import React from 'react';
import NextLink from 'next/link';
import { initialData } from '@/database/products';
import { Box, Button, CardActionArea, CardMedia, Grid, IconButton, Link, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ItemCounter } from '../ui';

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];

interface Props {
    editable?: boolean;
}

export const CartList = ({ editable = false }: Props) => {
  
  return (
    <>
        {
            productsInCart.map( product => (
                <Grid container spacing={2} key={ product.slug } sx={{ mb:1 }}>
                    <Grid item xs={3}>
                        {/* Todo: llevar a la pagina del product */}
                        <Link component={NextLink} href="/product/slug">
                            <CardActionArea>
                                <CardMedia
                                    image={`/products/${ product.images[0] }`}
                                    component='img'
                                    sx={{ borderRadius: '5px' }}
                                />
                            </CardActionArea>
                        </Link>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='body1'>{ product.title }</Typography>
                            <Typography variant='body1'>Talla: <strong>M</strong></Typography>
                            {
                                editable
                                ? <ItemCounter />
                                : <Typography variant='h6'>3 items</Typography>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                        <Typography variant='subtitle1'>{`$${ product.price }`}</Typography>
                        {
                            editable && (
                                <IconButton sx={{ marginTop: 2 }}>
                                    <DeleteOutlineOutlinedIcon color='error' sx={{ fontSize: 35 }}/>
                                </IconButton>
                            )
                        }
                    </Grid>
                </Grid>
            ))
        }
    </>
  )
}
