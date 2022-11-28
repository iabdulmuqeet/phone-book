import {
  Button, Card, Form, LoadingModal, Modal, TextField,
} from 'components'
import { isEmpty } from 'lodash'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import { addContact, fetchContacts, removeContact } from 'api/contacts'
import { contactFieldsInitialValues, contactFields } from 'utils/constants'
import validateContact from 'utils/validations'

import './styles.css'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setloading] = useState(false)
  const [contacts, setContacts] = useState([])
  const [allContacts, setAllContacts] = useState([])

  const getAllContacts = async () => {
    setloading(true)
    const response = await fetchContacts()
    if (!isEmpty(response)) {
      const { data: { contacts: resContacts } } = response
      setContacts(resContacts)
      setAllContacts(resContacts)
    }
    setloading(false)
  }

  useEffect(() => {
    getAllContacts()
  }, [])

  const handleAddContact = async values => {
    setloading(true)
    const response = await addContact(values)
    if (!isEmpty(response)) {
      const updatedContacts = [...contacts, response.data.contact]
      setContacts(updatedContacts)
      setAllContacts(updatedContacts)
      setShowModal(false)
    } else {
      toast.error('Adding contact error!')
    }
    setloading(false)
  }

  const handleRemoveContact = async id => {
    setloading(true)
    const response = await removeContact(id)
    if (!isEmpty(response)) {
      const updatedContacts = contacts.filter(contact => contact.contactId !== id)
      setContacts(updatedContacts)
      setAllContacts(updatedContacts)
    } else {
      toast.error('Removing contact error!')
    }
    setloading(false)
  }

  const handleSearch = ({ target: { value } }) => {
    const tempAllContacts = [...allContacts]
    setContacts(tempAllContacts.filter(
      contact => contact.lastName.toLowerCase().includes(value.toLowerCase()),
    ))
  }

  return (
    <div className='d-flex flex-column justify-content-center'>
      <LoadingModal show={loading} />
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
            <Card removeContact={handleRemoveContact} key={contact.phoneNumber} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
