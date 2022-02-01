import React from 'react';
import { ContentLoader, Loader } from './LoadingStyles';

const Loading = () => {
  return (
    <ContentLoader>
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
