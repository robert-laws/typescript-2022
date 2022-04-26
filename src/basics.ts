let myName: string;
let id: number;
let examPassed: boolean;
let birthDate: Date;
let collection: string[];

collection = ['items', '34'];
myItems = string['ball', 'hat', 'cap'];
let friend: string = "Bob";


enum ContactStatus {
  Active = 'active',
  Inactive = 'inactive',
}

interface Contact extends Address {
  id: number;
  name: ContactName;
  birthDate?: Date;
  status: ContactStatus;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

function clone(source: Contact, func: (source: Contact) => Contact): Contact {
  return Object.apply({}, source);
}

let myContact: Contact;

myContact = {
  id: 1,
  name: 'John',
  birthDate: new Date('2020-03-24'),
  status: ContactStatus.Active,
  street: '123 Main St',
  city: 'New York',
  state: 'NY',
  zip: '10001',
};

type ContactName = string;

type status = 'Active' | 'Inactive';

const b = clone(myContact, (source: Contact) => {
  return {
    ...source,
    status: ContactStatus.Inactive,
  };
});
