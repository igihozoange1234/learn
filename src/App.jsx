import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
{/*import Login from './login/login'*/}
{/*import Form from './form/login'*/}
import Form1 from './form2/login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
    {/* <Login/> */}
    {/*<Form/>*/}
    <Form1/>
    </div>
  )
}

export default App
