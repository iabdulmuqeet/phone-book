import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'

import Home from 'containers/home'

import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <>
    <ToastContainer />
    <Suspense fallback={<div />}>
      <Home />
    </Suspense>
  </>
)

export default App
