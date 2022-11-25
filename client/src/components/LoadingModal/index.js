import './styles.css'

const LoadingModal = ({ show }) => (
  show && (
    <div className='backdrop'>
      <div className='loading-spinner-wrapper'>
        <div className='loading-spinner'>
          <div />
        </div>
      </div>
    </div>
  )
)
export default LoadingModal
