import React from 'react'
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Jugaadrequest from './pages/jugaadRequestPage/jugaadRequest';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Profile from './pages/profile/profile';
import Chat from './pages/chat/chat';
import About from './pages/aboutUs/about';

const App = () => {

  const pathname = window.location.pathname;

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='*' element={<Home path={pathname} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/about' element={<About />} />
        <Route path='/jugaad-req/:id' element={<Jugaadrequest />} />
      </Routes>
    </div>
  )
}

export default App;
