import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

import { ContactEdit } from 'components/ContactEdit/ContactEdit';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem
            key={id}
            secondaryAction={
              <ContactEdit id={id} name={name} number={number} />
            }
          >
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={number} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
