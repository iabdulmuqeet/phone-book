import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'

import Home from 'container/home'

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
