import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Title } from 'components/Title/Title';

export default function RegisterView() {
  return (
    <>
      <Title text={'Create account'} />
      <RegisterForm />
    </>
  );
}
