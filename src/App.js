import React, { Component, Fragment } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import './App.css';
import {Container} from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <Container 
        variant='fluid' 
        component='article'
        maxWidth='sm'
      >
        <h1>Formulário de cadastro</h1>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
