import axios from 'axios';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import config from '../config'

import { insertMoviesByCategories } from '../Storage/Reducers/MoviesByCategories';

export const useGetListMoviesByCategories = () => {
  
  const dispatch = useDispatch();
  const category = localStorage.getItem('currentCategory'); 

  const getListMovies = async () => {
    dispatch( insertMoviesByCategories({ movies: [], isLoading: true, error: null }) )
    try {
      const { data } = await axios.get(`${config.BASE_URL}discover/movie?api_key=${config.API_KEY}&language=en-US&page=1&sort_by=popularity.desc&with_genres=${category}`)
      const sliceListMovie = data.results.slice(0, 10)
      dispatch( insertMoviesByCategories({ movies: sliceListMovie, isLoading: false, error: null }) )

    } catch (error) {
      dispatch( insertMoviesByCategories({ movies: [], isLoading: false, error: error }) )
    }
  }

  useEffect( () => {
    getListMovies();

  },[category] )


  return [ getListMovies ]
};

