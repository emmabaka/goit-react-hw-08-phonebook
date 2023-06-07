import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '@mui/material';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>{user.name}</p>
      <Button
        type="button"
        size="small"
        variant="outlined"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
