import { ContactsListItem } from './PhoneBook.module';

export default function ContactsArray({ name, number, id, onDeleteContact }) {
  return (
    <>
      <ContactsListItem>
        {name}: {number}{' '}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </ContactsListItem>
    </>
  );
}
