import { Outlet } from 'react-router-dom';
import { Container, Navigation, NavigationLink } from './Layout.styled';
import { useSelector } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid } from '@mui/material';
import { selectIsLogged } from 'redux/selectors';
import { Usermenu } from 'components/UserMenu/UserMenu';

const defaultTheme = createTheme();
const Layout = () => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={15}
          md={15}
          sx={{
            backgroundImage: `url('https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80');
}`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',

            overflow: 'hidden',
            height: '100vh',
            '@media (max-width: 480px)': {
              backgroundAttachment: 'fixed',
              overflow: 'auto',
            },
          }}
        >
          <Container style={{ padding: '0 20px' }}>
            <Navigation>
              <NavigationLink to="/">Головна</NavigationLink>
              {isLogged ? (
                <Usermenu />
              ) : (
                <div style={{ display: 'flex' }}>
                  <NavigationLink to="/register">Sign Up</NavigationLink>
                  <NavigationLink to="/login"> Sign In</NavigationLink>
                </div>
              )}
            </Navigation>
          </Container>

          <Outlet />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default Layout;
