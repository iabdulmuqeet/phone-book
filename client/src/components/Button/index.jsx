import './styles.css'

const Button = ({ submit }) => (
  <button onClick={submit} type='button' className='btn btn-primary'>
    + Add Contact
  </button>
)

export default Button
