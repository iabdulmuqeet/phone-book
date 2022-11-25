import './styles.css'

const Modal = ({ show, setShow, children }) => (
  show && (
    <div className='d-flex modal justify-content-center align-items-start'>
      <div className='modal-content'>
        <h3 className='text-center mb-4'>Contact Details</h3>
        <button type='button' onClick={() => setShow(false)} className='close'>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
)

export default Modal
