import { useHistory } from 'react-router-dom';
import { checkAuth } from './helpers';

export const CheckAuth = () => {
  const history = useHistory();
  checkAuth()
    .then()
    .catch((err) => err.response.status === 404 && history.push('/todos'));
};
