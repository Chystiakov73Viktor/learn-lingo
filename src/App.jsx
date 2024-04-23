import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'components/Layout/Layout';
import { refreshThunk } from './redux/users/operations';
import { selectUsersIsRefreshing } from './redux/users/selects';
import { PrivateRoute } from 'components/PrivateRoute';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './services/firebase';

const Home = lazy(() => import('pages/Home'));
const Teachers = lazy(() => import('pages/Teachers'));
const Favorites = lazy(() => import('pages/Favorites'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUsersIsRefreshing);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(refreshThunk());
      }
    });

    return () => unsubscribe();
  }, [dispatch, auth]);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route
              path="/favorites"
              element={<PrivateRoute component={Favorites} redirectTo="/" />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
