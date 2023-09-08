import styled from 'styled-components';
import { BiSearchAlt } from 'react-icons/bi';

export const Label = styled.label`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  font-size: 20px;
  font-weight: 500;
`;
export const Input = styled.input`
  display: block;
  width: 300px;
  padding: 10px 10px 10px 50px;
  font-size: 20px;
  border-radius: 12px;
  outline: none;
  border-color: #1e1e1fdf;
  margin-top: 16px;

  &:focus {
    box-shadow: 3px 1px 32px 0px #4a4a4b;
  }
  &::placeholder {
    margin-left: 50px;
  }
`;
export const SearchIIcon = styled(BiSearchAlt)`
  position: absolute;
  left: 25px;
  top: 75%;
  transform: translateY(-50%);
  fill: grey;
`;


