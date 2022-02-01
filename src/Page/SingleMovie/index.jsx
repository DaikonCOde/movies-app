import React, { useEffect, useState } from 'react';
// Hooks
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useGetSingleMovie } from '../../Hooks/useGetSingleMovie'
// Components
import GoBack from '../../Components/GoBack';
import Loading from '../../Components/Loading';
// Styles
import {
  ContentSingleMovie, 
  HeroMovie, 
  PosterMovie, 
  StatisticsMovie, 
  BodyMovie, 
  RuntimeMovie,
  ListCategories,
  Overview,
} from './SingleMovieStyles';
import { ButtonPlayGlobal } from '../../Styles/Globals/ButtonPlayGlobal';
import { RatingMovie, TitleMovie, } from '../../Styles/Globals/Title';

import { MdPlayArrow, MdStar } from 'react-icons/md';

import config from '../../config';

const SingleMovie = () => {

  const [ searchParams ] = useSearchParams();
  const navigate = useNavigate();
  const [ getSingleMovie, movieDetails, isLoading, error] = useGetSingleMovie()
  
  const runtime = !isLoading ? movieDetails.runtime / 60 : null;
  const idMovie = searchParams.get('id') || '';

  useEffect( () => {
    getSingleMovie(idMovie)
  }, [])

  const HandleVideo = (id) => {
    navigate(`/movie/video?id=${id}`)
  }

  if(isLoading) {
    return (<Loading height='100vh' margin='0'/>)
  }
  return (
    <ContentSingleMovie>
      <HeroMovie img={`${config.IMG_URL}${movieDetails.backdrop_path}`} >
        <PosterMovie>
          <img src={`${config.IMG_URL}${movieDetails.poster_path}`} alt="" />
          <ButtonPlayGlobal className="btnPlay" onClick={ () =>  HandleVideo(movieDetails.id) }>
            <MdPlayArrow />
          </ButtonPlayGlobal>
        </PosterMovie>
        <StatisticsMovie>
          <RatingMovie className="rating" >
            Rating: { movieDetails.vote_average }
            <span className="iconStar" >
              <MdStar />
            </span>
          </RatingMovie>
          <RuntimeMovie>
            { `Runtime: ${runtime.toFixed(1)}h` }
          </RuntimeMovie>
        </StatisticsMovie>
      </HeroMovie>
      <BodyMovie>
        <TitleMovie className="titleMovie">
          {movieDetails.title ? movieDetails.title : movieDetails.name }
        </TitleMovie>
        <ListCategories>
          {
            movieDetails.genres.map( (category) => {
              return (
                <li key={category.id} >
                  { category.name }
                </li>
              )
            } )
          }
        </ListCategories>
        <Overview>
          <TitleMovie as='h4'>
            Overview
          </TitleMovie>
          <p className='overview' >{movieDetails.overview}</p>
        </Overview>
      </BodyMovie>
      <GoBack />
    </ContentSingleMovie>
  )
};

export default SingleMovie;
