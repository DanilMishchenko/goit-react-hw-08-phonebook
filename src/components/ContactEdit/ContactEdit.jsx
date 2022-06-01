import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/contacts/contactsSlice';

import { useState } from 'react';
import { Form, Formik } from 'formik';

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

export const ContactEdit = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  const [updateContact] = useUpdateContactMutation();

  const [open, setOpen] = useState(false);

  const toggleModal = () => setOpen(state => !state);

  const initialValues = {
    name: name,
    number: number,
  };

  return (
    <>
      <IconButton edge="end" aria-label="edit" onClick={toggleModal}>
        <EditIcon />
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
              const { name, number } = value;
              updateContact({ id, name, number });
              action.resetForm();
              toggleModal();
            }}
          >
            {({ values, handleSubmit, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    label="Name"
                    type="text"
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
                  <Button type="submit">Update</Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => deleteContact(id)}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
};
