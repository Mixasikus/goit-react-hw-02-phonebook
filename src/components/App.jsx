import React, { Component } from 'react';
import Section from './PhoneBook/Section';
import Form from './PhoneBook/Form';
import Contacts from './PhoneBook/Contacts';
import Filter from './PhoneBook/Filter';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = data => {
    const { name, number } = data;
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const namesArray = this.state.contacts.map(contact => {
      return contact.name;
    });

    if (namesArray.includes(name)) {
      alert('такое уже есть');
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <Section>
          <Form onSubmit={this.addContacts} />
        </Section>

        <Section>
          Contacts
          <Filter value={filter} onChange={this.changeFilter} />
          <Contacts
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
