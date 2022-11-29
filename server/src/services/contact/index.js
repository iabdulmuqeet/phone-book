const db = require('../../models/index')

exports.createContact = async ({ firstName, lastName, phoneNumber }) => {
  try {
    return db.Contact.create({ firstName, lastName, phoneNumber })
  } catch (err) {
    throw new Error(err)
  }
}

exports.getAllContacts = async () => {
  try {
    return db.Contact.findAll()
  } catch (err) {
    throw new Error(err)
  }
}

exports.getContactById = async ({ contactId }) => {
  try {
    return db.Contact.findByPk(contactId)
  } catch (err) {
    throw new Error(err)
  }
}

exports.updateContact = async ({ contactId, firstName, lastName, phoneNumber }) => {
  try {
    const updateContact = await db.Contact.update(
      { firstName, lastName, phoneNumber },
      { where: { contactId } }
    )

    return updateContact[0] === 1 ? 'Successfully updated contact.' : 'Contact not found.'
  } catch (err) {
    throw new Error(err)
  }
}

exports.deleteContact = async ({ contactId }) => {
  try {
    const deleteContact = await db.Contact.destroy({ where: { contactId } })

    return deleteContact === 1 ? 'Successfully deleted contact.' : 'Contact not found.'
  } catch (err) {
    throw new Error(err)
  }
}
