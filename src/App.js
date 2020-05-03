import React, { Component } from "react";
import shortid from "shortid";

import ContactForm from "./components/ContactForm/contactForm";
import ContactList from "./components/ContactList/contactList";
import Filter from "./components/filter/filter";



const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const persistedTasks = localStorage.getItem("contacts");

    if (persistedTasks) {
      const contacts = JSON.parse(persistedTasks);

      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  handleForm = (items) => {
    let addItems = this.state.contacts.find((item) => item.name === items.name);

    if (this.state.contacts.length > 0 && addItems) {
      alert(`contact with name ${items.name} is allready exist`);
    } else {
      const contact = {
        id: shortid.generate(),
        name: items.name,
        number: items.number,
      };
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteList = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  };
  

  handleFIlter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContact = filterContacts(contacts, filter);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onHandleForm={this.handleForm} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.handleFIlter} />
        <ContactList items={filterContact} onDeleteList={this.deleteList} />
      </div>
    );
  }
}
