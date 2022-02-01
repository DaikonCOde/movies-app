import React from 'react';
import { ContentLoader, Loader } from './LoadingStyles';

const Loading = ( { height, margin } ) => {
  

  return (
    <ContentLoader height = {height} margin = {margin}>
      <Loader className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Loader>
    </ContentLoader>
  )
};

export default Loading;
