import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosUsuario({ aoEnviar, validacoes }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } })

    function validarCampos(e) {
        const {name, value} = e.target
        const novoEstado = {...erros}
        novoEstado[name] =  validacoes[name](value)
        setErros(novoEstado)
    }

    function possoEnviar() {
        for(let campos in erros) {
            if(!erros[campos].valido) {
                return false
            }
        }
        return true
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if(possoEnviar()) {
                    aoEnviar({email, senha});
                }                
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
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                name='senha'
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
            >Próximo</Button>
        </form>
    )
}
export default DadosUsuario