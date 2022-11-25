import './styles.css'

const Button = ({ submit, name, disabled = false }) => (
  <button disabled={disabled} onClick={submit} type='submit' className='btn btn-primary'>
    {name}
  </button>
)

export default Button
