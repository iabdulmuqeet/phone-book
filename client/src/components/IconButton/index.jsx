import './styles.css'

const IconButton = ({ submit, iconName, background }) => (
  <button onClick={submit} type='button' className={`btn ${background}`}>
    <i className={iconName} aria-hidden='true' />
  </button>
)

export default IconButton
