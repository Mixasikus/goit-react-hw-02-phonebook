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
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
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
    // console.log(visibleContacts);

    return (
      <>
        <Section>
          <Form onSubmit={this.addContacts} />
        </Section>

        <Section>
          Contacts
          <Filter value={filter} onChange={this.changeFilter} />
          <Contacts contacts={visibleContacts} />
        </Section>
      </>
    );
  }
}
