import React from 'react';

import { ContentCardMovie, ItemMovie, ContentInfo, InfoMovie, ButtonPlay } from './CardMovieStyles';
import { MdPlayArrow, MdStar } from 'react-icons/md';

import config from '../../config'

const CardMovie = ({ movies }) => {
  return (
    <ContentCardMovie className='contentCards'>
      {
        movies.map( (movie) => (
          <ItemMovie key={movie.id} img={`${config.IMG_URL}${movie.poster_path}`}>
            <ContentInfo>
              <InfoMovie >
                <span className='rating' > <span className='iconStar' ><MdStar /></span> {movie.vote_average}</span>
                <h2 className='title'>{ movie.title ? movie.title : movie.name }</h2>
              </InfoMovie>
              <ButtonPlay>
                <MdPlayArrow />
              </ButtonPlay>
            </ContentInfo>
          </ItemMovie>
        ) )
      }
    </ContentCardMovie>
  )
};

export default CardMovie;
