import styled from 'styled-components';
import backgroundImage from './homepage-bkg.png';
// import { colors } from '../utils/constants';

export const HomeContainer = styled.div`
  min-height: calc(100vh - 81px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  background-image: url(${backgroundImage});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
`;

export const HomeTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: 500;
  font-size: 48px;
  text-shadow: 1px 1px 2px white, 0 0 0.2em white;
`;

export const HomeText = styled.p`
  margin: 0;
  text-align: center;
  font-weight: 500;
  font-size: 48px;
  text-shadow: 1px 1px 2px white, 0 0 0.2em white; ;
`;
