import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Forms from './Forms/Forms';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Forms/>
     
    </>
  )
}

export default App
