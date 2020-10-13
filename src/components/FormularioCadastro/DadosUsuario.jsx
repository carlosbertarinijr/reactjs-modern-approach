import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                aoEnviar({email, senha});
            }
            }
        >
            <TextField
                value={email}
                onChange={e => {
                    setEmail(e.target.value)
                }}
                id='email'
                label='Email'
                type='email'
                required
                variant='outlined'
                fullWidth
                margin='normal'
            />
            <TextField
                value={senha}
                onChange={e => {
                    setSenha(e.target.value)
                }}
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