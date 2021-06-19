import LoginForm from '../../Components/LoginForm';
import { CheckAuth } from '../../store/checkAuth';

const LoginPage = () => {
  CheckAuth();
  return <LoginForm />;
};

export default LoginPage;
