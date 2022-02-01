import React, { useEffect } from 'react';

// Components
import Header from '../../Components/Header';
import ComingSoon from '../../Components/ComingSoon';
import GridMovies from '../../Components/GridMovies';
// Styles
import { ContentHome } from './HomeStyles';

const Home = () => {


  return (
    <ContentHome>
      <Header />
      <ComingSoon />
      <GridMovies />
    </ContentHome>
  )
};

export default Home;
