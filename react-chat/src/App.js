import React, { useContext } from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import AppRoater from './components/AppRouter';
import { Context } from './index';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />
  }

  return (
    <HashRouter>
      <Navbar />
      <AppRoater />
    </HashRouter>
  );
}

export default App;
