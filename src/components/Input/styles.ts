import styled from 'styled-components';

export const Container = styled.div`
  background: #a9a9a9;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 3px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

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
