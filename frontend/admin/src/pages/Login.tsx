import { useAuthContext } from '@/state/auth.context';
import React from 'react'

interface LoginFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
 
interface LoginForm extends HTMLFormElement {
  readonly elements: LoginFormElements;
}

const Login: React.FC = () => {
  const { authToken, setAuthToken } = useAuthContext();

  const handleLogIn = (event: React.FormEvent<LoginForm>) => {
    event.preventDefault();
    const target = event.currentTarget.elements;
    console.log('Logging in', target.email.value, target.password.value);
    setAuthToken(`${target.email.value}-${target.password.value}`);
  }

  const handleLogOut = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    localStorage.removeItem('auth_token');
    setAuthToken(null);
  }

  return (
    <div className="card">
      <form onSubmit={handleLogIn}>
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default Login;
