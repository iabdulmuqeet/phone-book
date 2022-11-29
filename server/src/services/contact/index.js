const db = require('../../models/index')

exports.createContact = async ({ firstName, lastName, phoneNumber }) => (
  db.Contact.create({ firstName, lastName, phoneNumber })
    .then(res => res.dataValues)
    .catch(err => { throw new Error(err) })
)
exports.getAllContacts = async () => (
  db.Contact.findAll()
  .then(res => res)
  .catch(err => { throw new Error(err) })
)

exports.getContactById = async ({ contactId }) => (
  db.Contact.findByPk(contactId)
  .then(res => res)
  .catch(err => { throw new Error(err) })
)

exports.updateContact = async ({ contactId, firstName, lastName, phoneNumber }) => (
  db.Contact.update(
    { firstName, lastName, phoneNumber },
    { where: { contactId } }
  )
  .then (res => res[0] === 1 ? 'Successfully updated contact.' : 'Contact not found.')
  .catch(err => { throw new Error(err) })
)

exports.deleteContact = async ({ contactId }) => (
  db.Contact.destroy({ where: { contactId } })
  .then(res => res === 1 ? 'Successfully deleted contact.' : 'Contact not found.')
  .catch(err => { throw new Error(err) })
)
