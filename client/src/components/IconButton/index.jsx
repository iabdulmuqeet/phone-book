import './styles.css'

const IconButton = ({ submit }) => (
  <button onClick={submit} type='button' className='btn btn-danger'>
    <i className='fa fa-trash' aria-hidden='true' />
  </button>
)

export default IconButton
