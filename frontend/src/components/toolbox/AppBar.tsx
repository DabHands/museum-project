/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as s from './AppBar.theme';


export const AppBar: React.FC = () => {
  const navigate = useNavigate();

  const [isOnHomePage, setIsOnHomePage] = useState(false);
  const [isOnAboutPage, setIsOnAboutPage] = useState(false);
  const [isOnExplorePage, setIsOnExplorePage] = useState(false);


  const navigateToHomePage = () => {
    if (isOnHomePage == false) {
      setIsOnHomePage(true);
      navigate('/');
    }
    setIsOnAboutPage(false);
    setIsOnHomePage(false);
  };

  const navigateToAboutPage = () => {
    if (isOnAboutPage == false) {
      setIsOnAboutPage(true);
      navigate('/about');
    }
    setIsOnHomePage(false);
    setIsOnExplorePage(false);
  }

  const navigateToExplorePage = () => {
    if (isOnExplorePage == false) {
      setIsOnExplorePage(true);
      navigate('/explore');
    }
    setIsOnHomePage(false);
    setIsOnAboutPage(false);
  };

  return (
  <s.AppBarBody>

    <s.AppBarSection>
      <s.AppBarButton onClick={navigateToHomePage}>Home</s.AppBarButton>
    </s.AppBarSection>

    <s.AppBarSection>
      <span>|</span>
    </s.AppBarSection>

    <s.AppBarSection>
      <s.AppBarButton onClick={navigateToAboutPage}>About</s.AppBarButton>
    </s.AppBarSection>

    <s.AppBarSection>
      <span>|</span>
    </s.AppBarSection>

    <s.AppBarSection>
      <s.AppBarButton onClick={navigateToExplorePage}>Explore</s.AppBarButton>
    </s.AppBarSection>

  </s.AppBarBody>

  );
};
