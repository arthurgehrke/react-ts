import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="BooksLogo" />
      <form>
        <h1>Realize seu login</h1>

        <input placeholder="email" />

        <input type="password" placeholder="password" />

        <button type="submit">Entrar</button>

        <a href="forgotPassword">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
