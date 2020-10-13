import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosUsuario({ aoEnviar }) {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                aoEnviar();
            }
            }
        >
            <TextField
                id='email'
                label='Email'
                type='email'
                required
                variant='outlined'
                fullWidth
                margin='normal'
            />
            <TextField
                id='senha'
                label='senha'
                type='password'
                required
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