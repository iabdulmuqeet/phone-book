import { IconButton } from 'components'

import './styles.css'

const Card = ({ contact, removeContact }) => (
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
    <div className='d-flex flex-column justify-content-center'>
      <IconButton submit={() => removeContact(contact.contactId)} />
    </div>
  </div>
)

export default Card
