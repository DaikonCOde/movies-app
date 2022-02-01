import React, { useEffect } from 'react';
// Components
import FilterCategories from '../FilterCategories';
import CardMovie from '../CardMovie';
import Loading from '../Loading';
// Hooks
import { useGetListMoviesByCategories } from '../../Hooks/useGetListMoviesByCategories';
import { useGetMoviesByRating } from '../../Hooks/useGetMoviesByRating';
import { useSelector } from 'react-redux';
// Styles
import { Title } from '../../Styles/Globals/Title';
import { ContentGridMovies, ListMovies } from './GridMoviesStyles';

const GridMovies = () => {
  const [ getListMovies ] = useGetListMoviesByCategories();
  const [ getMoviesByRating ] = useGetMoviesByRating();
  const { movies, isLoading, error } = useSelector( state => state.moviesByCategory );
  const { moviesByRating, isLoadingRating , errorRating } = useSelector( state => state.moviesByRating);
  const currentCategory = localStorage.getItem('currentCategory');

  useEffect(() => {
    if(movies.length > 0) {
      getListMovies()
    }
  }, [currentCategory] )
  
  useEffect(() => {
    if (movies.length <= 0) {
      getListMovies()
    } 
    if(moviesByRating <= 0) {
      getMoviesByRating();
    }
  }, [])

  return (
    <>
      <ContentGridMovies>
        <Title>
          Now Showing
        </Title>
        <FilterCategories />
        <ListMovies>
          {
            isLoading
              ? <Loading />
              : <CardMovie movies={movies} />
          }
        </ListMovies>
      </ContentGridMovies>
      <ContentGridMovies>
        <Title>
          Top Movies
        </Title>
        <ListMovies>
          {
            isLoadingRating
              ? <Loading />
              : <CardMovie movies={moviesByRating} />
          }
        </ListMovies>
      </ContentGridMovies>
    </>
  )
};

export default GridMovies;
