import styled from 'styled-components';
import { colors } from '../../utils/constants';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  font-size: 22px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  :nth-child(2n) {
    background-color: ${colors.backgroundAccent};
  }
`;

export const Button = styled.button`
  margin-left: 20px;
  border: 0px;
  background-color: transparent;
`;

export const ItemImage = styled.img`
  height: 40px;
  border-radius: 50%;
`;
