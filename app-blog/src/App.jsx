import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export const AppBanner = () => {
  return (
    <div>Coomponente Hijo.</div>
  )
}

const App = () => {
  return (
    <>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita nam ut aperiam?</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <img src="" alt="" />
    <AppBanner/>
    </>
  )
}


export default App;