import ContactItem from 'components/ContactItem/ContactItem';
import { List, Error } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contactsSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';

export default function ContactList() {
  const { data = [] } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = id => deleteContact(id);

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();
  return (
    <List>
      {contactsList.length > 0 ? (
        contactsList.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={handleDeleteContact}
            />
          );
        })
      ) : (
        <Error>
          <strong>Oops, nothing</strong>
        </Error>
      )}
    </List>
  );
}
