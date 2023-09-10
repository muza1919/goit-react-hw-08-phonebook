import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth';
import { Title, LoginForm, LoginButton } from './LoginPage.styled';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Title>Login page</Title>

      <LoginForm onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </div>
  );
}
