import { TextField } from '@mui/material';
import { Box } from '@mui/system';

export default function ContactFilter({ filter, onChange }) {
  return (
    <Box
      sx={{
        width: 510,
        maxWidth: '100%',
      }}
    >
      <TextField
        fullWidth
        label="Find contacts by name"
        name="filter"
        onChange={onChange}
        value={filter}
      />
    </Box>
  );
}
