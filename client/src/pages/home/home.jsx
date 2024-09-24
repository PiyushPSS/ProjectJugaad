import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import AddRequestModel from '../../components/AddRequestModel'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Categories from '../categories/Categories'
import { Routes, Route } from 'react-router-dom'

const Home = () => {

  const [showModel, setShowModel] = useState(false);

  const [category, setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />

      {/* TODO: ADD THE BUTTON AND IMAGE TO THE HEADER IMAGE AS SOON AS THE USER LOGS IN. */}

      {/* <button className='addRequestButton bg-violet-500 px-4 py-2 rounded-lg text-lg text-white' onClick={() => {
        setShowModel(true);
      }}>Add a Request</button> */}

      {/* {showModel && <AddRequestModel onClose={() => {
        setShowModel(false);
      }} />} */}


      <Routes>
        <Route path='/' element={<Categories name="all" />} />
        <Route path='/category/clothes' element={<Categories name='clothes' />} />
        <Route path='/category/bike' element={<Categories name='bike' />} />
        <Route path='/category/car' element={<Categories name='car' />} />
        <Route path='/category/projects' element={<Categories name='projects' />} />
        <Route path='/category/daily-use' element={<Categories name='essentials' />} />
        <Route path='/category/pg-rooms' element={<Categories name='pg-rooms' />} />
        <Route path='/category/books' element={<Categories name='books' />} />
      </Routes>
    </div>
  )
}

export default Home;