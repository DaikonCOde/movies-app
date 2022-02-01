import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';

import { ContentGoBack } from './GoBackStyles'

const GoBack = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(-1);
  }
  return (
    <ContentGoBack onClick={handleNavigation} >
      <MdChevronLeft />
    </ContentGoBack>
  )
};

export default GoBack;
