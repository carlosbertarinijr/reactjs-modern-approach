import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosUsuario() {
    return (
        <form>
            <TextField 
                id='email' 
                label='Email' 
                type='email' 
                variant='outlined'
                fullWidth
                margin='normal' 
            />
            <TextField 
                id='senha' 
                label='senha' 
                type='password' 
                variant='outlined'
                fullWidth
                margin='normal' 
            />
            <Button 
                type='submit'
                type='submit'
                variant='contained'
                color='primary'
            >Cadastrar</Button>            
        </form>
    )
}
export default DadosUsuario