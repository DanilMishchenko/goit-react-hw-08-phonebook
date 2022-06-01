import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations, authSelectors } from 'redux/auth';
import NotFoundView from 'views/NotFoundView';
import { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
import PrivatRoute from './Routes/PrivatRoute';
import PublicRoute from './Routes/PublicRoute';

const HomeView = lazy(() =>
  import('../views/HomeView' /* webpackChunkName: "home-view" */)
);

const RegisterView = lazy(() =>
  import('../views/RegisterView' /* webpackChunkName: "register-view" */)
);

const LoginView = lazy(() =>
  import('../views/LoginView' /* webpackChunkName: "login-view" */)
);

const PhonebookView = lazy(() =>
  import('../views/PhonebookView' /* webpackChunkName: "phonebook-view" */)
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeView />} />
              <Route
                path="register"
                element={
                  <PublicRoute>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivatRoute>
                    <PhonebookView />
                  </PrivatRoute>
                }
              />
              <Route path="*" element={<NotFoundView />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
