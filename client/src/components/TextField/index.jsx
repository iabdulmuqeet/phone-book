import './styles.css'

const TextField = ({
  icon, placeholder, handleChange, value, name, type,
}) => (
  <div className='field-wrapper w-100 pt-1 pb-1'>
    {icon}
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className='search-field'
      placeholder={placeholder}
    />
  </div>
)

export default TextField
