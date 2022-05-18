import classes from './MainHeader.module.scss';
import Navigation from './Navigation';

export default function MainHeader(props) {
  return (
    <header className={classes['main-header']}>
      <h1>A typical page</h1>
      <Navigation isLoggedIn={true} onLogout={props.onLogout} />
    </header>
  );
}
