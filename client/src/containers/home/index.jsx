import {
  Button, Card, Form, Modal, TextField,
} from 'components'
import { contactFieldsInitialValues, contactFields } from 'utils/constants'
import { useState } from 'react'
import validateContact from 'utils/validations'

import './styles.css'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  // const [loading, setloading] = useState(false)
  const [contacts] = useState([
    {
      id: 0,
      firsName: 'Eric',
      lastName: 'Elliot',
      number: '219-555-6757',
    },
    {
      id: 1,
      firsName: 'Eric',
      lastName: 'Elliot',
      number: '223-555-6757',
    },
    {
      id: 2,
      firsName: 'Eric',
      lastName: 'Elliot',
      number: '229-555-6757',
    },
    {
      id: 3,
      firsName: 'Eric',
      lastName: 'Elliot',
      number: '217-555-6757',
    },
  ])

  const handleAddContact = async values => {
    console.log(values)
    // setloading(true)
    // const { token } = await login(values)
    // if (token) {
    //   navigate('/products')
    // } else {
    //   toast.error('Login error')
    // }
    // setloading(false)
  }

  const handleSearch = event => {
    console.log(event.target.value)
  }

  return (
    <div className='d-flex flex-column justify-content-center'>
      <Modal show={showModal} setShow={setShowModal}>
        <Form
          action='Submit'
          fieldsInitialValues={contactFieldsInitialValues}
          fields={contactFields}
          handleSubmition={handleAddContact}
          validate={validateContact}
        />
      </Modal>
      <div className='d-flex flex-row align-items-center justify-content-center mt-5'>
        <i className='fa fa-address-book' aria-hidden='true' />
        <h1 className='mt-2'>Phone Book App</h1>
      </div>
      <div className='container d-flex flex-column justify-content-between body-container'>
        <div className='d-flex align-content-center flex-wrap justify-content-between mt-5'>
          <h2>Contacts</h2>
          <Button submit={() => setShowModal(true)} name='+ Add Contact' />
        </div>
        <div className='d-flex align-content-center mt-5'>
          <TextField handleChange={handleSearch} placeholder='Searh for contact by last name...' icon={<i className='fa fa-search' />} />
        </div>
        <div className='d-flex flex-column align-content-center border rounded mt-4'>
          {contacts.map((contact) => (
            <Card key={contact.number} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
