import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useAddContactMutation } from 'redux/contacts/contactsSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const ContactForm = () => {
  const [addContact] = useAddContactMutation();
  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen(state => !state);

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <>
      <IconButton color="success" onClick={toggleModal}>
        <AddCircleIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            onSubmit={(value, action) => {
              addContact(value);
              action.resetForm();
              toggleModal();
            }}
          >
            {({ values, handleSubmit, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    label="Name"
                    type="name"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <TextField
                    label="Phone"
                    type="tel"
                    name="number"
                    onChange={handleChange}
                    value={values.number}
                  />
                  <Button type="submit">Create</Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};
