import { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';
import classes from './Navigation.module.scss';

export default function Navigation(props) {
  const contextData = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {contextData.isLoggedIn && (
          <li>
            <a href='#'>Users</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <a href='#'>Admin</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <Button onClick={contextData.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
