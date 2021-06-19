import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>This page not exists</h1>
      <Link to="/todos">
        <h2>Return to Todos Page</h2>
      </Link>
    </div>
  );
};

export default NotFoundPage;
