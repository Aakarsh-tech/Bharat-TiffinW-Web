// import { View, Text } from 'react-native'
import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Lower from './components/Lower'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50'>
      <Navbar/>
      <br />
      
      <main className='flex-1 w-full'>
        <div className='w-full'>
        <Banner/>
        </div>
      
      <div className='w-full'>
        <Lower />
      </div>
      </main>
    </div>
 
   
  )
}

export default App