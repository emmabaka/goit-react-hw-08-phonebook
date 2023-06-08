import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactsThunk, getContactsThunk } from 'redux/contactsThunk';
import { getContactsSelector, getFilterSelector } from 'redux/selectors';
import { ThreeDots } from 'react-loader-spinner';
import { Button } from '@mui/material';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContactsSelector);
  const filterName = useSelector(getFilterSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const visibleContacts = () => {
    return [...contacts.data].filter(({ name }) =>
      name.toLowerCase().includes(filterName.toLowerCase())
    );
  };

  return (
    <div className={css.contactListContainer}>
      {contacts.isLoading && (
        <ThreeDots
          height="60"
          width="60"
          radius="9"
          color="#0000ff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      {contacts.error && <p>Oops, something wrong</p>}
      {contacts.data && (
        <ul className={css.contactList}>
          {visibleContacts().map(item => {
            return (
              <li key={item.id} className={css.contact}>
                <span className={css.contactItem}> {item.name}:</span>{' '}
                <span>{item.number}</span>
                <Button
                  className={css.deleteButton}
                  size="small"
                  onClick={e => dispatch(deleteContactsThunk(item.id))}
                >
                  Delete
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
