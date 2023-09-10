import styled from 'styled-components';

export const RegisterTitle = styled.h1`
  text-align: center;
`;

export const RegisterForm = styled.form`
  margin-left: auto;
  margin-right: auto;
`;

export const RegisterButton = styled.button`
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: flex;
  fill: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 28px;
  justify-content: center;
  letter-spacing: -0.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    border-color: #06f;
  }

  &:hover {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }

  &:active {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }

  @media (min-width: 768px) {
    .button-59 {
      min-width: 170px;
    }
  }
`;
