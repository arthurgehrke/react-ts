import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #a9a9a9;
  border-radius: 10px;
  padding: 3px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #a52a2a;
      border-color: #a52a2a;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #a52a2a;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #666360;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
