import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header } from './AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </Header>
  );
};
