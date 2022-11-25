import Home from 'containers/home'
import { Suspense } from 'react'

const App = () => (
  <Suspense fallback={<div />}>
    <Home />
  </Suspense>
)

export default App
