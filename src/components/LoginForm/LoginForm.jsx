import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Paper elevation={3} className={css.loginContainer}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="email"
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />

        <TextField
          type="password"
          name="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />

        <Button type="submit">Log In</Button>
      </form>
    </Paper>
  );
};
