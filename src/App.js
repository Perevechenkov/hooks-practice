import { useState } from 'react';

import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <MainHeader />
      <main>{!isLoggedIn && <Login />}</main>
    </>
  );
}
