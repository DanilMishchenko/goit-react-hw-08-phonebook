import { useNavigate } from 'react-router-dom';
import { Button } from './AuthNav.styled';

export const AuthNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button type="button" onClick={() => navigate('/register')}>
        Register
      </Button>
      <Button type="button" onClick={() => navigate('/login')}>
        Login
      </Button>
    </div>
  );
};
