import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function Phonebook() {
  return (
    <div
      style={{
        paddingTop: '100px',
      }}
      className="container"
    >
      <ContactForm />
      <div>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
