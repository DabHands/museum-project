/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import * as s from './AppBar.theme';
import logo from '../../util/logo/logo.jpg';

enum AppBarPages {
    HOME,
    ABOUT,
    EXPLORE
}

export const AppBar: React.FC = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(AppBarPages.HOME);


  const navigateToHomePage = () => {
    if (page !== AppBarPages.HOME) {
      setPage(AppBarPages.HOME);
      navigate('/');
    }
  };

  const navigateToAboutPage = () => {
    if (page !== AppBarPages.ABOUT) {
      setPage(AppBarPages.ABOUT);
      navigate('/about');
    }
  }

  const navigateToExplorePage = () => {
    if (page !== AppBarPages.EXPLORE) {
      setPage(AppBarPages.EXPLORE);
      navigate('/explore');
    }
  };

  return (
  <s.AppBarBody>
    <s.AppBarHomePageWrapper>
      <s.AppBarLogo src={logo} alt="Home" onClick={navigateToHomePage}/>
    </s.AppBarHomePageWrapper>

    <MediaQuery minWidth={800}>
      <s.AppBarPagesWrapper>
        <s.AppBarSection>
          <s.AppBarButton onClick={navigateToAboutPage}>About</s.AppBarButton>
        </s.AppBarSection>

        <s.AppBarSection>
          <span>|</span>
        </s.AppBarSection>

        <s.AppBarSection>
          <s.AppBarButton onClick={navigateToExplorePage}>Explore</s.AppBarButton>
        </s.AppBarSection>
      </s.AppBarPagesWrapper>
    </MediaQuery>

    {/* <MediaQuery maxWidth={800}>
      <s.AppBarBarsButton>
        <i className="fa-solid fa-bars fa-2xl"></i>
      </s.AppBarBarsButton>
    </MediaQuery> */}

  </s.AppBarBody>

  );
};
