import { IconButton } from 'components'

import './styles.css'

const Card = ({ contact }) => (
  <div className='d-flex w-100 justify-content-between card-wrapper'>
    <div className='d-flex flex-column'>
      <h3>
        {contact.firstName} {contact.lastName}
      </h3>
      <div className='d-flex flex-row justify-content-center align-items-center'>
        <i className='fa fa-phone' />
        <p className='contact'>{contact.number}</p>
      </div>
    </div>
    <div className='d-flex flex-column justify-content-center'>
      <IconButton />
    </div>
  </div>
)

export default Card
