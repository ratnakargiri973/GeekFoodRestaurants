import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSection from './nav'
import Restaurants from './Restaurants'

function App() {

  return (
    <>
      <NavSection />
      <div className='RestaurantContainer'>
      <Restaurants />
      </div>
    </>
  )
}

export default App
