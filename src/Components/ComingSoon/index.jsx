import React, { useEffect } from 'react';
// Components
import Loading from '../Loading'
// Hooks
import { useGetComingSoonMovies } from '../../Hooks/useGetComingSoonMovies';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// Styles
import { ContentComingSoon, ContentMovies, TitleMovie, ButtonPlay } from './ComingSoonStyles'
import { Title } from '../../Styles/Globals/Title';
// Icons
import { MdPlayArrow } from 'react-icons/md';

// Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import config from '../../config';

const ComingSoon = () => {

  const [ getComingSoonMovies ] = useGetComingSoonMovies();
  const { listMovies, isLoading, error } = useSelector( state => state.comingSoon );

  useEffect( () => {
    if(listMovies.length <= 0) {
      getComingSoonMovies()
    }
  }, [])

  return (
    <ContentComingSoon>
      <Title>Comming Soon</Title>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={10}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
          isLoading 
            ? <Loading />
            : listMovies.map( ( movie) => { 
              return (
                <SwiperSlide key={movie.id}>
                  <Link to={`/movie?id=${movie.id}`}>
                    <ContentMovies img={ `${config.IMG_URL}${movie.backdrop_path}` } >
                      <TitleMovie>
                        { movie.title}
                      </TitleMovie>
                      <ButtonPlay>
                        <MdPlayArrow />
                      </ButtonPlay>
                    </ContentMovies>
                  </Link>
                </SwiperSlide>
              )
            } )
        }
      </Swiper>
    </ContentComingSoon>
  )
};

export default ComingSoon;
