import { LoginForm } from 'components/LoginForm/LoginForm';
import { Title } from 'components/Title/Title';

export default function LoginView() {
  return (
    <>
      <Title text={'Sign in'} />
      <LoginForm />
    </>
  );
}
