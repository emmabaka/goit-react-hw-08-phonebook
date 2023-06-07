import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Paper elevation={3} className={css.registerContainer}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          type="text"
          name="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />

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

        <Button type="submit">Register</Button>
      </form>
    </Paper>
  );
};
