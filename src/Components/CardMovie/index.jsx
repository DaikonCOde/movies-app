import React from 'react';
// Hooks
import { Link } from 'react-router-dom'

import { ContentCardMovie, ItemMovie, ContentInfo, InfoMovie, ButtonPlay } from './CardMovieStyles';
import { TitleMovie, RatingMovie } from '../../Styles/Globals/Title';
import { MdPlayArrow, MdStar } from 'react-icons/md';
// Swiper
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import config from '../../config'


const CardMovie = ({ movies }) => {
  return (
    <ContentCardMovie className='contentCards'>
      <Swiper
        slidesPerView={2}
        // centeredSlides={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {
          movies.map( (movie) => (
            <SwiperSlide key={movie.id} className="swiperSlide" >
              <Link to={`/movie?id=${movie.id}`}>
                <ItemMovie img={`${config.IMG_URL}${movie.poster_path}`}>
                  <ContentInfo>
                    <InfoMovie >
                      <RatingMovie className='rating' > <span className='iconStar' ><MdStar /></span> {movie.vote_average}</RatingMovie>
                      <TitleMovie className='title'>{ movie.title ? movie.title : movie.name }</TitleMovie>
                    </InfoMovie>
                    <ButtonPlay>
                      <MdPlayArrow />
                    </ButtonPlay>
                  </ContentInfo>
                </ItemMovie>
              </Link>
            </SwiperSlide>
          ) )
        }
      </Swiper>
    </ContentCardMovie>
  )
};

export default CardMovie;
