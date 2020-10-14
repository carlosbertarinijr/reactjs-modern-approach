import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'


function DadosPessoais({ aoEnviar, validacoes }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');

    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })

    function validarCampos(e) {
        const { name, value } = e.target
        const novoEstado = { ...erros }
        novoEstado[name] = validacoes[name](value)
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
        <form onSubmit={e => {
            e.preventDefault()
            if(possoEnviar()) {
                aoEnviar({ nome, sobrenome, cpf, novidades, promocoes })
            }
            
        }}>
            <TextField
                value={nome}
                onChange={e => {
                    setNome(e.target.value)
                }
                }
                id='nome'
                label='Nome'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={sobrenome}
                onChange={e => {
                    setSobrenome(e.target.value)
                }}
                id='sobrenome'
                label='Sobrenome'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <TextField
                value={cpf}
                onChange={e => {
                    setCpf(e.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id='cpf'
                name='cpf'
                label='CPF'
                variant='outlined'
                fullWidth
                margin='normal'
            />

            <FormControlLabel
                label='Promoções'
                control={
                    <Switch
                        checked={promocoes}
                        onChange={e => { setPromocoes(e.target.checked) }}
                        name='promocoes'
                        color='primary'
                    />
                }
            />

            <FormControlLabel
                label='Novidades'
                control={
                    <Switch
                        checked={novidades}
                        onChange={e => { setNovidades(e.target.checked) }}
                        name='novidades'
                        color='primary'
                    />
                }
            />

            <Button
                type='submit'
                variant='contained'
                color='primary'
            >Próximo</Button>
        </form>
    )
}

export default DadosPessoais;