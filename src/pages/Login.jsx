import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

const Login = () => {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </HelmetProvider>
  );
};

export default Login;
