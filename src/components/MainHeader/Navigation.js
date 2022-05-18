import Button from '../UI/Button/Button';
import classes from './Navigation.module.scss';

export default function Navigation(props) {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Button onClick={props.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
