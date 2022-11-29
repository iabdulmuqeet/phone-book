const yup = require('yup')

exports.createContactSchema = yup.object().shape({
  firstName: yup.string().min(3).max(55).required(),
  lastName: yup.string().min(3).max(55).required(),
  phoneNumber: yup.string().min(10).max(15).required(),
})

exports.updateContactSchema = yup.object().shape({
  firstName: yup.string().min(3).max(55),
  lastName: yup.string().min(3).max(55),
  phoneNumber: yup.string().min(10).max(15),
})
