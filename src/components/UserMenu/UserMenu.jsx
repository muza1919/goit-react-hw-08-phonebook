import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, logOut } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import logoutImage from './ship.png';
import {
  UserMenuContainer,
  ImageAvatar,
  ImageShip,
  LogoutButton,
} from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUsername);
  const avatar = defaultAvatar;

  return (
    <UserMenuContainer>
      <ImageAvatar src={avatar} alt="User avatar" />
      <span>Welcome, {name}</span>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
        <ImageShip src={logoutImage} alt="Logout" />
      </LogoutButton>
    </UserMenuContainer>
  );
}
