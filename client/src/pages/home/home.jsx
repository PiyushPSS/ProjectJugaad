import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import AddRequestModel from '../../components/AddRequestModel'

const Home = () => {

  const [showModel, setShowModel] = useState(false);

  return (
    <div>
      <Header />

      <button className='addRequestButton bg-violet-500 px-4 py-2 rounded-lg text-lg text-white' onClick={() => {
        setShowModel(true);
      }}>Add a Request</button>

      {showModel && <AddRequestModel onClose={() => {
        setShowModel(false);
      }} />}
    </div>
  )
}

export default Home;