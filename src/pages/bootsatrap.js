import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Menu from '../Menu';
import '../Nav.css';
import FOOTER from '../Footre';

const contacts = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '555-123-4567',
    adresse: 'France',
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    phone: '555-987-6543',
    adresse: 'Maroc',
  },
  {
    name: 'Bob Johnson',
    email: 'bobjohnson@example.com',
    phone: '555-555-5555',
    adresse: 'Bruxelle',
  },
];

const ContactList = () => {
  return (
    <div >
      <Menu />


      <h1 className='titeCalond'>Return a l'Accueil  <a className="ReturenBotstrab " href="/"> return</a></h1>


      <div className='bootimg-1'>

        <Form>
          <div className='boxshowBotstrap'>
            {contacts.map((contact, index) => (
              <div key={index}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' value={contact.name} disabled />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' value={contact.email} disabled />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type='tel' value={contact.phone} disabled />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control type='text' value={contact.adresse} disabled />
                </Form.Group>

                <hr />
              </div>

            ))}
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </div>
        </Form>
     
      </div>
      <FOOTER /></div>
  );
};

export default ContactList;
