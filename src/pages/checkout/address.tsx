import { ShopLayout } from '@/components/layout'
import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const AddressPage = () => {
  return (
    <ShopLayout title='Direccion' pageDescription='Direccion de Envio del Pedido'>
        <Typography variant='h1' component='h1'>Direccion</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                    <TextField label='Nombre' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Apellido' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Direccion' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Direccion 2(Opcional)' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Codigo Postal' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Ciudad' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <Select
                            variant='filled'
                            label='Pais'
                            value={1}
                        >
                            <MenuItem value={1}>Costa Rica</MenuItem>
                            <MenuItem value={2}>Bolivia</MenuItem>
                            <MenuItem value={1}>Honduras</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Telefono' variant='filled' fullWidth/>
                </Grid>
            </Grid>

            <Box sx={{ mt: 5}} display='flex' justifyContent='center'>
                <Button color='secondary' className='circular-bnt' size='large'>
                    Revisar Pedido
                </Button>
            </Box>
    </ShopLayout>
  )
}

export default AddressPage