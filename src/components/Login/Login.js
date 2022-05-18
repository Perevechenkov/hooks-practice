import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Login.module.scss';

export default function Login(props) {
  return (
    <Card className={classes.Login}>
      <form>
        <div className={`${classes.control}`}>
          <label htmlFor='email'>E-Mail</label>
          <input type='email' id='email' />
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <div className={`${classes.actions}`}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}
