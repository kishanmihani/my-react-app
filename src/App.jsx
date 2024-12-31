import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Curdino from './Component/crudino'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-100'>
      <Curdino />
    </div>
  )
}

export default App
