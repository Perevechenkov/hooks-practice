import { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, pass) => {
    localStorage.setItem('isLoggedIn', true);

    // localStorage.setItem('email', email);
    // localStorage.setItem('password', pass);

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // localStorage.removeItem('isLoggedIn');
    localStorage.setItem('isLoggedIn', false);

    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
}
