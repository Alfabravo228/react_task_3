import React, { useContext, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Loader from './components/loader/Loader';
import { useAuthState } from 'react-firebase-hooks/auth';
import AppRoater from './components/appRoater/AppRouter';
import { Context } from './index';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />
  }

  return (
    <HashRouter>
      <AppRoater />
    </HashRouter>
  );
}
export default App;
