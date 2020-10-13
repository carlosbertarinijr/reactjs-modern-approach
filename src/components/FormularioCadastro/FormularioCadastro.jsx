import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

function FormularioCadastro() {
    return (
        <form>
            <TextField id='nome' label='Nome' variant='outlined'/>

            <TextField id='sobrenome' label='Sobrenome' variant='outlined'/>

            <TextField id='cpf' label='CPF' variant='outlined'/>

            <label>Promoções</label>
            <TextField type='checkbox' />

            <label>Novidades</label>
            <TextField type='checkbox' />

            <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;