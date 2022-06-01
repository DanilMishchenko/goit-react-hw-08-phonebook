import { Typography } from '@mui/material';
import { Title } from 'components/Title/Title';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);
  return (
    <>
      <Title text="Welcome!" />
      {!isLoggedIn ? (
        <Typography align="center" component="p" variant="h6">
          To get started, <Link to="/register">register</Link> or{' '}
          <Link to="/login">login</Link> as a user.
        </Typography>
      ) : (
        <Typography align="center" component="p" variant="h4">
          {name}! Now you can save your contact list.
        </Typography>
      )}
    </>
  );
}
