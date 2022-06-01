import { SpinnerCircularSplit } from 'spinners-react';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <SpinnerCircularSplit
        size={90}
        thickness={100}
        speed={120}
        color="rgb(7, 106, 104)"
        secondaryColor="rgb(255, 175, 0"
      />
    </LoaderContainer>
  );
};
