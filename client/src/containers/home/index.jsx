import { Button, Card, SearchFields } from 'components'
import { useState } from 'react'

import './styles.css'

const Home = () => {
  const [contacts] = useState([
    {
      id: 0,
      firsName: 'Eric',
      lastName: 'Elliot',
      number: '222-555-6757',
    },
    {
      id: 1,
      firsName: 'Eric',
      lastName: 'Elliot',
      number: '222-555-6757',
    },
    {
      id: 2,
      firsName: 'Eric',
      lastName: 'Elliot',
      number: '222-555-6757',
    },
    {
      id: 3,
      firsName: 'Eric',
      lastName: 'Elliot',
      number: '222-555-6757',
    },
  ])

  return (
    <div className='d-flex flex-column justify-content-center'>
      <div className='d-flex flex-row align-items-center justify-content-center mt-5'>
        <i className='fa fa-address-book' aria-hidden='true' />
        <h1 className='mt-2'>Phone Book App</h1>
      </div>
      <div className='container d-flex flex-column justify-content-between body-container'>
        <div className='d-flex align-content-center flex-wrap justify-content-between mt-5'>
          <h2>Contacts</h2>
          <Button />
        </div>
        <div className='d-flex align-content-center mt-5'>
          <SearchFields />
        </div>
        <div className='d-flex flex-column align-content-center border rounded mt-4'>
          {contacts.map((contact) => (
            <Card contact={contact} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
