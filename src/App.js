import ContactForm from './components/Form/Form.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts List</h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} />
    </>
  );
}
