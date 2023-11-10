import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';

export const OrderSummary = () => {
  return (
    <Grid container>
        <Grid item xs={ 6 }>
            <Typography>No. Productos</Typography>
        </Grid>        
        <Grid item xs={ 6 } display='flex' justifyContent='end'>
            <Typography>3 items</Typography>
        </Grid>

        <Grid item xs={ 6 }>
            <Typography>Subtotal</Typography>
        </Grid>
        <Grid item xs={ 6 } display='flex' justifyContent='end'>
            <Typography>{`$${ 155.36 }`}</Typography>
        </Grid>

        <Grid item xs={ 6 }>
            <Typography>Impuesto (15%)</Typography>
        </Grid>
        <Grid item xs={ 6 } display='flex' justifyContent='end'>
            <Typography>{`$${ 35.36 }`}</Typography>
        </Grid>

        <Grid item xs={ 6 } sx={{ mt:2 }}>
            <Typography variant='subtitle1'>Total: </Typography>
        </Grid>
        <Grid item xs={ 6 } sx={{ mt:2 }} display='flex' justifyContent='end'>
            <Typography variant='subtitle1'>{`$${ 188.36 }`}</Typography>
        </Grid>
    </Grid>
  )
}
