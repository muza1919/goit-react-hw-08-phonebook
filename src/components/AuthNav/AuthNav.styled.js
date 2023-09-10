import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: #e84a5f;
  }
  &:not(last-child) {
    margin-right: 20px;
  }
`;
