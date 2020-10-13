import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import './App.css';
import {Container, Typography} from '@material-ui/core';
import 'fontsource-roboto'

class App extends Component {
  render() {
    return (
      <Container 
        variant='fluid' 
        component='article'
        maxWidth='sm'
      >
        <Typography variant='h3' component='h1' align='center' >Formulário de cadastro</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
