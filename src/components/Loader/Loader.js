import { SpinnerCircularSplit } from 'spinners-react';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <SpinnerCircularSplit
        size={90}
        thickness={100}
        speed={120}
        color="#0804f3"
        secondaryColor="#cc50ff"
      />
    </LoaderContainer>
  );
};
