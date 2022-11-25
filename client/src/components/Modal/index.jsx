import './styles.css'

const Modal = ({ show, setShow, children }) => (
  show && (
    <div className='d-flex modal justify-content-center align-items-start'>
      <div className='modal-content'>
        <button type='button' onClick={() => setShow(false)} className='close'>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
)

export default Modal
