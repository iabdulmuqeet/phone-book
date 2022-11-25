const express = require('express')
const router = express.Router()

const { validation } = require('../../middlewares/validation')
const { createContactSchema, updateContactSchema } = require('../../validations/contact')
const contactController = require('../../controllers/contact')

router.post('/', validation(createContactSchema), contactController.createContact)
router.get('/', contactController.getAllContacts)
router.get('/:contactId', contactController.getContactById)
router.patch('/:contactId', validation(updateContactSchema), contactController.updateContact)
router.delete('/:contactId', contactController.deleteContact)

module.exports = router
