import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div>
      <h2>Unauthorized</h2>
      <p>You do not have permission to view this page.</p>
      <Link to="/login">Go back to Login</Link>
    </div>
  );
};

export default Unauthorized;
