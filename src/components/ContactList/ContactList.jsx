import { Button, ContainerR, Li, P, Ul } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';
import { deleteContact } from 'redux/Contacts/operationsContact';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const deleteContactsById = (id, contactName) => {
    dispatch(deleteContact(id));
    toast.success(
      `The contact "${contactName}" has been successfully deleted.`
    );
  };

  const filterContacts = () => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  return (
    <ContainerR>
      {contacts.length <= 0 ? (
        <P>No contacts were found for this request</P>
      ) : filterContacts().length <= 0 ? (
        <P>No contacts found for this search "{filter}"</P>
      ) : (
        <Ul>
          {filterContacts().map(({ id, name, number }) => {
            return (
              <Li key={id}>
                <span>
                  {name} : {number}
                </span>
                <Tooltip title="Delete contacts">
                  <Button
                    type="button"
                    onClick={() => {
                      deleteContactsById(id, name);
                    }}
                  >
                    <DeleteIcon></DeleteIcon>
                  </Button>
                </Tooltip>
              </Li>
            );
          })}
        </Ul>
      )}
    </ContainerR>
  );
};
