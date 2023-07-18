import { Container, NavigationLink } from 'components/Layout/Layout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from 'redux/Auth/operationsAuth';
import { selectUser } from 'redux/selectors';
import { UserButton, UserContainer, UserTitle } from './UserMenu.styled';

export const Usermenu = () => {
  const userAuth = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Container
      style={{
        justifyContent: 'space-between',
        width: '100%',
        background: 'none',
      }}
    >
      <NavigationLink to="/contacts"> Contacts </NavigationLink>
      <UserContainer>
        <UserTitle> {userAuth.email} </UserTitle>
        <UserButton
          onClick={() => {
            dispatch(userLogOut());
          }}
        >
          Logout
        </UserButton>
      </UserContainer>
    </Container>
  );
};
