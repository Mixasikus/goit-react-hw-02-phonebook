import { ContactsList } from './PhoneBook.module';
import ContactsArray from './ContactsArray';

export default function Contacts({ contacts }) {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactsArray
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ContactsList>
  );
}
