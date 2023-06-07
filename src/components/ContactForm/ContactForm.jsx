import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'redux/contactsThunk';
import { getContactsSelector } from 'redux/selectors';
import { Button, TextField } from '@mui/material';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const { data } = useSelector(getContactsSelector);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const isInclude = data.some(item => item.name === name);

    if (isInclude) {
      alert(`${name} is already in contacts`);
      e.target.elements.name.value = '';
      e.target.elements.number.value = '';
      return;
    }
    dispatch(addContactsThunk({ name, number }));
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <TextField
        id="outlined-basic"
        variant="outlined"
        label=" Number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit" variant="outlined" className={css.submitButton}>
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
