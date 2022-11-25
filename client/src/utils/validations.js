const validateContact = (values) => {
  const errors = {}

  if (!values.firsName) {
    errors.firsName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.number) {
    errors.number = 'Required'
  }
  return errors
}

export default validateContact
