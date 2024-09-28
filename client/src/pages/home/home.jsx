import React, { useState } from 'react';
import './home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import AddRequestModel from '../../components/AddRequest/AddRequestModel'
import Categories from '../categories/Categories';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import { CategoryURLList, categoryName } from '../../assets/assets';

const Home = ({ path }) => {
  const [categoryText, setCategoryText] = useState(categoryName.all);
  const [showModel, setShowModel] = useState(false);

  if (CategoryURLList.includes(path)) {

    return (
      <div>
        <Header />
        <ExploreMenu categoryText={categoryText} setCategoryText={setCategoryText} />

        <div className="flex justify-between items-center my-4">
          <h2 className="text-2xl font-bold text-gray-800">{categoryText} Recent Requests:</h2>
          <p className='cursor-pointer'><u>view all</u></p>
        </div>


        {/* TODO: ADD THE BUTTON AND IMAGE TO THE HEADER IMAGE AS SOON AS THE USER LOGS IN. */}

        <button className='addRequestButton bg-violet-500 px-4 py-2 rounded-lg text-lg text-white' onClick={() => {
          setShowModel(true);
        }}>Add a Request</button>

        {showModel && <AddRequestModel onClose={() => {
          setShowModel(false);
        }} />}


        <Routes>
          <Route path="/" element={<Categories name={categoryName.all} setCategoryText={setCategoryText} />} />
          <Route path="/category/clothes" element={<Categories name={categoryName.clothes} setCategoryText={setCategoryText} />} />
          <Route path="/category/bike" element={<Categories name={categoryName.bike} setCategoryText={setCategoryText} />} />
          <Route path="/category/car" element={<Categories name={categoryName.car} setCategoryText={setCategoryText} />} />
          <Route path="/category/projects" element={<Categories name={categoryName.projects} setCategoryText={setCategoryText} />} />
          <Route path="/category/daily-use" element={<Categories name={categoryName['daily-use']} setCategoryText={setCategoryText} />} />
          <Route path="/category/pg-rooms" element={<Categories name={categoryName['pg-rooms']} setCategoryText={setCategoryText} />} />
          <Route path="/category/books" element={<Categories name={categoryName.books} setCategoryText={setCategoryText} />} />
        </Routes>
      </div>
    );
  } else {
    console.log(path);
    return (
      <NotFound />
    )
  };
}

export default Home;
