import React from 'react';
// Components
import Loading from '../Loading'
// Hooks
import { useGetComingSoonMovies } from '../../Hooks/useGetComingSoonMovies';
// Styles
import { ContentComingSoon, ContentMovies, TitleMovie, ButtonPlay } from './ComingSoonStyles'
import { Title } from '../../Styles/Globals/Title';
// Icons
import { MdPlayArrow } from 'react-icons/md';

import config from '../../config';

const ComingSoon = () => {

  const [ data, isLoading , error ] = useGetComingSoonMovies();

  return (
    <ContentComingSoon>
      <Title>Comming Soon</Title>
      {
        isLoading 
          ? <Loading />
          :(
            <ContentMovies img={ `${config.IMG_URL}${data.backdrop_path}` } >
              <TitleMovie>
                { data.title}
              </TitleMovie>
              <ButtonPlay>
                <MdPlayArrow />
              </ButtonPlay>
            </ContentMovies>
          )
      }
    </ContentComingSoon>
  )
};

export default ComingSoon;
