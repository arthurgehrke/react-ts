import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="BooksLogo" />
      <form>
        <h1>Realize seu login</h1>

        <Input name="password" icon={FiMail} placeholder="email" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="password"
        />
        <Button type="submit">Entrar</Button>

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
