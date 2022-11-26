const contactService = require('../../services/contact')
const { promise } = require('../../middlewares/promise')

exports.createContact = promise(async (req, res) => {
	const { firstName, lastName, phoneNumber } = req.body

	const contact = await contactService.createContact({ firstName, lastName, phoneNumber })

	res.status(200).json({
		message: 'Successfully created new contact',
		contact
	})
})

exports.getAllContacts = promise(async (_req, res) => {
	const contacts = await contactService.getAllContacts()

	res.status(200).json({ contacts })
})

exports.getContactById = promise(async (req, res) => {
  const { contactId } = req.params

	const contact = await contactService.getContactById({ contactId })

	res.status(200).json({ contact })
})

exports.updateContact = promise(async (req, res) => {
  const { contactId } = req.params
	const { firstName, lastName, phoneNumber } = req.body

	const message = await contactService.updateContact({ contactId, firstName, lastName, phoneNumber })

	res.status(200).json({ message })
})

exports.deleteContact = promise(async (req, res) => {
  const { contactId } = req.params

	const message = await contactService.deleteContact({ contactId })

	res.status(200).json({ message })
})
