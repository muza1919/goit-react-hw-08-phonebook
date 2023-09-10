import styled from 'styled-components';
import { colors } from '../../utils/constants';

export const ImageAvatar = styled.img`
  width: 32px;
  border-radius: 50%;
  border: 1px solid ${colors.border};
`;

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${colors.border};
  background-color: ${colors.backgroundAccent};
`;

export const ImageShip = styled.img`
  width: 32px;
`;
