import React from 'react';
// Hooks
import { useSearchParams } from 'react-router-dom';
import { useGetVideoMovie } from '../../Hooks/useGetVideoMovie';
// Components
import GoBack from '../../Components/GoBack';
import Loading from '../../Components/Loading';
// Styles
import { ContentMediaPlayer} from './MediaPlayerStyles';
import { TitleMovie } from '../../Styles/Globals/Title'

const MediaPlayer = () => {

  const [searchParams] = useSearchParams();
  const idMovie = searchParams.get('id');
  const [ video, isLoading, error] = useGetVideoMovie(idMovie);

  const heightVideo = (window.innerWidth * 315) / 560;
  
  if(isLoading) {
    return (<Loading height='100vh' margin='0'/>)
  }

  return (
    <ContentMediaPlayer>
      <iframe
        className="frameVideo"
        width="100%" 
        height={heightVideo} 
        src={`https://www.youtube-nocookie.com/embed/${video.heroTrailer.key}`} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      >
      </iframe>
      <TitleMovie className="title">{video.heroTrailer.name}</TitleMovie>
      <GoBack />
    </ContentMediaPlayer>
  )
};

export default MediaPlayer;
