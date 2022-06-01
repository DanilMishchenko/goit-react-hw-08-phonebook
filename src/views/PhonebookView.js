import { Container, Grid } from '@mui/material';
import ContactFilter from 'components/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useState } from 'react';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

export default function PhonebookView() {
  const { data, isLoading } = useGetContactsQuery();
  const [filter, setFilter] = useState('');

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs>
          <ContactFilter filter={filter} onChange={changeFilter} />
        </Grid>
        <Grid item xs>
          <ContactForm />
        </Grid>
        {!isLoading ? (
          <Grid item xs>
            <ContactList contacts={getFilteredContacts()} />
          </Grid>
        ) : (
          'Contact list is empty.'
        )}
      </Grid>
    </Container>
  );
}
