import { Formik } from 'formik'
import { isEmpty } from 'lodash'
import { Button, TextField } from 'components'

import styles from './styles.css'

const Form = ({
  fieldsInitialValues, handleSubmition, validate, fields,
}) => (
  <Formik
    initialValues={fieldsInitialValues}
    enableReinitialize
    validate={validate}
    onSubmit={handleSubmition}
  >
    {({
      values, errors, touched, handleChange, handleSubmit,
    }) => (
      <form className={styles.materialForm} onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div className='mb-3' key={field.name}>
            <TextField
              placeholder={field.placeholder}
              type={field.type}
              name={field.name}
              handleChange={handleChange}
              value={values[field.name]}
            />
            <p className='text-danger'>
              {errors[field.name] && touched[field.name] && errors[field.name]}
            </p>
          </div>
        ))}
        <div className='d-flex justify-content-center mt-4'>
          <Button disabled={!isEmpty(errors)} name='Submit' />
        </div>
      </form>
    )}
  </Formik>
)

export default Form
