import { Suspense } from 'react'

import Home from 'containers/home'

const App = () => (
  <Suspense fallback={<div />}>
    <Home />
  </Suspense>
)

export default App
