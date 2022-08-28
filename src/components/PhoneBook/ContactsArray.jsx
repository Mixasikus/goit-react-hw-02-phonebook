import { ContactsListItem } from './PhoneBook.module';

export default function ContactsArray({ name, number }) {
  return (
    <>
      <ContactsListItem>
        {name}: {number}
      </ContactsListItem>
    </>
  );
}
