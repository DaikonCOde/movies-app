import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGetCategories } from "./Hooks/useGetCategories";
import { useGetMoviesTrending } from './Hooks/useGetMoviesTrending';

import Home from './Page/Home';
import Theme from './Theme';

const App = () =>  {

  useGetCategories();
  useGetMoviesTrending();

  return (
    <BrowserRouter>
      <Theme>
        <Routes>
          <Route path="/"  element={ <Home /> } />
        </Routes>
      </Theme>
    </BrowserRouter>
  )
  
}

export default App
