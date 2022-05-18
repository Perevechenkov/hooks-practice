import { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Login.module.scss';

export default function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = event => {
    setEnteredEmail(event.target.value);

    validateFormHandler(event.target.value, enteredPassword);
  };

  const passwordChangeHandler = event => {
    setEnteredPassword(event.target.value);

    validateFormHandler(enteredEmail, event.target.value);
  };

  const validateFormHandler = (email, pass) => {
    setFormIsValid(pass.trim().length > 3 && email.includes('@'));
  };

  const submitHandler = event => {
    event.preventDefault();

    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.Login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control}`}>
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={`${classes.control}`}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={`${classes.actions}`}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}
