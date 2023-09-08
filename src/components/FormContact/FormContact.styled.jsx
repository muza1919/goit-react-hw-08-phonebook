import { Field, ErrorMessage, Form } from 'formik';
import styled from 'styled-components';
export const Container = styled.div`
  width: 500px;
  padding-top: 40px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 40px;
  background-color: #9f94ab7f;
  margin: 40px auto 0 auto;
  border-radius: 12px;
  box-shadow: inset -7px -6px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const FormCont = styled(Form)`
  margin: 0 auto;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
  margin: 0 auto;
`;
export const Input = styled(Field)`
  display: block;
  width: 450px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 12px;
  outline: none;
  border-color: #1e1e1fdf;

  &:hover,
  &:focus {
    box-shadow: 3px 1px 32px 0px #f3f2f6;
  }
`;

export const BtnAdd = styled.button`
  display: block;
  margin: 40px auto 0 auto;
  padding: 16px 28px;
  border-radius: 12px;
  font-size: 20px;
  background-color: rgba(27, 27, 28, 0.496);
  border: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow 250ms ease-in;
  &:disabled {
    background-color: rgba(89, 92, 92, 0.688);
  }
  &:hover,
  &:focus {
    box-shadow: 3px 1px 32px 0px #f3f2f6;
  }
`;
export const Error = styled(ErrorMessage)`
  color: red;
  margin-bottom: 10px;
`;


