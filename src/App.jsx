// import { View, Text } from 'react-native'
import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Lower from './components/Lower'
import Upper from './components/Upper'
import Footer from './components/Footer'

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
        <Upper />
      </div>
      </main>

      <div className="mt-auto">
       <Footer />
      </div>
    </div>
 
   
  )
}

export default App