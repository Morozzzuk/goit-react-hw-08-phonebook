import { PhoneBook } from 'pages/PhoneBook.jsx/PhoneBook';
import { SignIn } from 'pages/SignIn/SignIn';
import { SignUp } from 'pages/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/selectors';
import { userRefresh } from 'redux/Auth/operationsAuth';
import { Loader } from 'pages/PhoneBook.jsx/PhoneBook.styled';
import { CircleLoader } from 'react-spinners';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader>
      <CircleLoader
        color="blue"
        size={100}
        loading={isRefreshing}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Loader>
  ) : (
    <>
      <ToastContainer autoClose={3000} draggable={false} />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<SignIn />} />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" component={<SignUp />} />
            }
          ></Route>
          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/" component={<PhoneBook />} />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
