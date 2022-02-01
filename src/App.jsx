import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGetCategories } from "./Hooks/useGetCategories";
import { useGetMoviesTrending } from './Hooks/useGetMoviesTrending';

import Home from './Page/Home';
import SingleMovie from './Page/SingleMovie';
import MediaPlayer from './Page/MediaPlayer';

import Theme from './Theme';

const App = () =>  {

  useGetCategories();
  useGetMoviesTrending();

  return (
    <BrowserRouter>
      <Theme>
        <Routes>
          <Route path="/"  element={ <Home /> } />
          <Route path="/movie" element={ <SingleMovie /> } />
          <Route  path='/movie/video' element={ <MediaPlayer /> } />
        </Routes>
      </Theme>
    </BrowserRouter>
  )
  
}

export default App
