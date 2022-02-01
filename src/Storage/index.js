import { configureStore } from '@reduxjs/toolkit';
import Categories from './Reducers/Categories';
import MoviesByCategories from './Reducers/MoviesByCategories';
import MoviesByRating from './Reducers/MoviesByRating';
import TrendingMovies from './Reducers/Trending'
import ComingSoon from './Reducers/ComingSoon'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    listCategories: Categories,
    moviesByCategory: MoviesByCategories,
    moviesByRating: MoviesByRating,
    trendingMovies: TrendingMovies,
    comingSoon: ComingSoon,
  },

})