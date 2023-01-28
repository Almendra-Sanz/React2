import { useState } from 'react'
import './App.css'
import NavBar from './components/menu/navBar'
import Greeting,{ GreetingTitle } from './components/menu/itemListContainer' 

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
    <NavBar/>
      <GreetingTitle/>
      <Greeting name='El loco' />
      <Greeting name='Sabiondo' />
      <Greeting name='El mistico' />
      <Greeting name='Aromito' />
  </div>

  )
    
}

export default App
