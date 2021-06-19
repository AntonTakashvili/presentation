import RegisterForm from './../../Components/RegisterForm';
import { CheckAuth } from '../../store/checkAuth';

const RegisterPage = () => {
  CheckAuth();
  return <RegisterForm />;
};

export default RegisterPage;
