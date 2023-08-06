import React from 'react';
import './styles/App.css';
import PagePosts from './pages/PagePosts';
import PageAbout from './pages/PageAbout';
import { PageIdPost } from './pages/PageIdPost';
import { BrowserRouter, NavLink, Routes, Route, redirect } from 'react-router-dom';



function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
      <div className="links">
        <NavLink to='/'>About</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
      </div>
        <Routes>
          <Route path='/posts' element={<PagePosts />}/>
          <Route path='/posts/:id' element={<PageIdPost />} />
          <Route path='/' element={<PageAbout />}/>
          <Route path='*' element={<PagePosts />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
