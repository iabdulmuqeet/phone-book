const request = require('supertest')
const app = require('../../server.js')

describe('Contacts API', () => {
  it('should show all contacts', async () => {
    const res = await request(app).get('/api/v1/contacts')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('contacts')
  })

  it('should show a single contact', async () => {
    const res = await request(app).get('/api/v1/contacts/16')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('contact')
  })

  it('should create a new contact', async () => {
    const res = await request(app)
      .post('/api/v1/contacts')
      .send({
        firstName: 'Abdul Muqeet',
        lastName: 'Arshad',
        phoneNumber: '03096890060'
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body.message).toMatch(/Successfully created new contact/)
    expect(res.body).toHaveProperty('contact')
  })

  it('should update a contact', async () => {
      const res = await request(app)
        .patch('/api/v1/contacts/18')
        .send({
          firstName: 'Abdul Muqeet',
          lastName: 'Arshad Update',
          phoneNumber: '03096890060'
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('message')
      expect(res.body.message).toMatch(/Successfully updated contact/)
  })

  it('should delete a contact', async () => {
      const res = await request(app)
        .del('/api/v1/contacts/19')
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('message')
      expect(res.body.message).toMatch(/Successfully deleted contact/)
  })
})
