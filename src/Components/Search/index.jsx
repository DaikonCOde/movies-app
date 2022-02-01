import React, { useEffect, useState } from 'react';
// Hooks
import { useGetMovieByName } from '../../Hooks/useGetMovieByName';
import { useSelector } from 'react-redux';
// Components
import CardMovie from '../CardMovie';
import Loading from '../Loading';
// Styles
import { ContentSearch, ContentIcon, ContentForm, ButtonSubmit, ContentResultSearch } from './SearchStyles';
import { Title } from '../../Styles/Globals/Title'
// Icons
import { MdChevronRight, MdSearch } from 'react-icons/md';


const Search = ({ isOpen, onClose }) => {

  const [ movies, isLoading, error, getMovieByName ] = useGetMovieByName();
  const [ keyword, setKeyword ] = useState('');
  const { trendingMovies, isLoadingTrending, errorTrending } = useSelector( state => state.trendingMovies )

  useEffect( () => {
    if( keyword.length > 2 ) {
      const key = keyword.toLowerCase().replaceAll(' ', '%20');
      getMovieByName(key)
    }
  },[keyword] )


  const handleChange = (e) => {
    const value = e.target.value;

    setKeyword(value)
  }
  return (
    <ContentSearch isOpen={isOpen} >
      <ContentIcon onClick={onClose} >
        <MdChevronRight />
      </ContentIcon>
      <ContentForm>
        <input 
          type="text" 
          placeholder='What would you like to see?' 
          name='title' 
          className='inputTitle'
          onChange={ handleChange }
        />
        <ButtonSubmit as='button' type="submit">
          <MdSearch />
        </ButtonSubmit>
      </ContentForm>
      <ContentResultSearch>
        {
          isLoadingTrending
          ? <Loading />
          : keyword.length < 2
            ?(
              <>
                <Title className='title' >Trending</Title>
                <CardMovie movies={trendingMovies}/>
              </>
            )
            : isLoading 
              ? <Loading />
              : movies.length === 0 
                ? ( <div className='notFound'>We did not find anything</div> )
                : (<>
                    <Title>{keyword}</Title>
                    <CardMovie movies={movies}/>
                  </>)
        }
      </ContentResultSearch>
    </ContentSearch>
  )
};

export default Search;  
