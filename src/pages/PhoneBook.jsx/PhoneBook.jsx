import { useDispatch, useSelector } from 'react-redux';
import { Container, ContainerL, SectionContainer } from './PhoneBook.styled';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/Contacts/operationsContact';
import { useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { P } from 'components/ContactList/ContactList.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <SectionContainer>
      <ContainerL>
        <Section title="Phonebook">
          <ContactForm />
          <Filter />
        </Section>
      </ContainerL>
      <Container>
        <Section title="Contacts">
          {isLoading && !error && contacts.length <= 0 ? (
            <P>No contacts in Phonebook</P>
          ) : (
            <ContactList />
          )}
        </Section>
      </Container>
    </SectionContainer>
  );
};
