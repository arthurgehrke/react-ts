/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="BooksLogo" />
        <Form onSubmit={handleSubmit}>
          <h1>Realize seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="nome" />
          <Input name="email" icon={FiMail} placeholder="email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="password"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para o Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
