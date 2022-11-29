import {
  Button, Card, Form, LoadingModal, Modal, TextField,
} from 'components'
import { isEmpty } from 'lodash'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import {
  addContact, fetchContacts, removeContact, updateContact,
} from 'api/contacts'
import { contactFields, contactInitialValues } from 'utils/constants'
import validateContact from 'utils/validations'

import './styles.css'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setloading] = useState(false)
  const [isEdit, setisEdit] = useState(false)
  const [contactFieldsInitialValues, setContactFieldsInitialValues] = useState(contactInitialValues)
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

  const handleUpdateContact = async values => {
    setloading(true)
    const response = await updateContact(values)
    if (!isEmpty(response)) {
      const copyContacts = [...contacts]
      const index = copyContacts.findIndex((item => item.contactId === values.contactId))
      copyContacts.splice(index, 1, { ...values })
      setContacts(copyContacts)
      setAllContacts(copyContacts)
      setShowModal(false)
    } else {
      toast.error('Adding contact error!')
    }
    setloading(false)
    setisEdit(false)
  }

  const handleContact = async values => {
    if (isEdit) {
      await handleUpdateContact(values)
    } else {
      await handleAddContact(values)
    }
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

  const modalUpdateContact = contact => {
    setShowModal(true)
    setisEdit(true)
    setContactFieldsInitialValues(contact)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setisEdit(false)
    setContactFieldsInitialValues(contactInitialValues)
  }

  return (
    <div className='d-flex flex-column justify-content-center'>
      <LoadingModal show={loading} />
      <Modal show={showModal} setShow={handleCloseModal}>
        <Form
          action='Submit'
          fieldsInitialValues={contactFieldsInitialValues}
          fields={contactFields}
          handleSubmition={handleContact}
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
            <Card
              removeContact={handleRemoveContact}
              updateContact={modalUpdateContact}
              key={contact.phoneNumber}
              contact={contact}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
