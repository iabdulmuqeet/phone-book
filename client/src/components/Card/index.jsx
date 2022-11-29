import { IconButton } from 'components'

import './styles.css'

const Card = ({ contact, removeContact, updateContact }) => (
  <div className='d-flex w-100 justify-content-between card-wrapper'>
    <div className='d-flex flex-column'>
      <h3>
        {contact.firstName} {contact.lastName}
      </h3>
      <div className='d-flex flex-row justify-content-start align-items-center'>
        <i className='fa fa-phone' />
        <p className='contact'>{contact.phoneNumber}</p>
      </div>
    </div>
    <div className='d-flex flex-row align-items-center justify-content-between btn-wrapper'>
      <IconButton iconName='fa fa-pencil' background='btn-info' submit={() => updateContact(contact)} />
      <IconButton iconName='fa fa-trash' background='btn-danger' submit={() => removeContact(contact.contactId)} />
    </div>
  </div>
)

export default Card
