import React from 'react';
import NextLink from 'next/link';

import { CartList, OrderSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layout';
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link } from '@mui/material';

const SummaryPage = () => {
    return (
        <ShopLayout title='Resumen de orden' pageDescription='Resumen de la orden'>
            <Typography variant='h1' component='h1'>Resumen de la Orden</Typography>

            <Grid container>
                <Grid item xs={ 12 } sm={ 7 }>
                    <CartList/>
                </Grid>
                <Grid item xs={ 12 } sm={ 5 }>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>Resumen (3 productos)</Typography>
                            
                            <Divider sx={{ my: 1 }}/>
                            
                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant='subtitle1'>Direccion de entrega</Typography>
                                <Link component={NextLink} href='/checkout/address' underline='always'>
                                    Editar
                                </Link>
                            </Box>
                            <Typography>Jose Manuel Muñoz</Typography>
                            <Typography>323 Algun lugar</Typography>
                            <Typography>Stittsville, HYA23S</Typography>
                            <Typography>Canada</Typography>
                            <Typography>+1 231122221</Typography>

                            <Divider sx={{ my: 1 }}/>
                            
                            <Box display='flex' justifyContent='end'>
                                <Link component={NextLink} href='/cart' underline='always'>
                                    Editar
                                </Link>
                            </Box>
                            <OrderSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Checkout
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
      )
}

export default SummaryPage;