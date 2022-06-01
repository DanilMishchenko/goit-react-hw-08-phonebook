import { Typography } from '@mui/material';

export const Title = ({ text }) => {
  return (
    <Typography align="center" variant="h3" component="h1" gutterBottom>
      {text}
    </Typography>
  );
};
