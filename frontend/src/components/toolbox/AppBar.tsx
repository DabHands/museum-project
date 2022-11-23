/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import * as s from './AppBar.theme';
import logo from '../../util/logo/logo.jpg';

enum AppBarPages {
  HOME,
  EXPLORE,
  ABOUT,
  MODEL,
  SCAN_IMAGE
}

export const AppBar: React.FC = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState<AppBarPages>(AppBarPages.HOME);
  const [showMenu, setShowMenu] = useState<boolean>(false);


  const navigateToHomePage = () => {
    if (page !== AppBarPages.HOME) {
      setPage(AppBarPages.HOME);
      navigate('/');
    }
  };

  const navigateToModelPage = () => {
    if (page !== AppBarPages.MODEL) {
      setPage(AppBarPages.MODEL);
      navigate('/model');
    }
  };

  const navigateToScanImagePage = () => {
    if (page !== AppBarPages.SCAN_IMAGE) {
      setPage(AppBarPages.SCAN_IMAGE);
      navigate('/image-scanning');
    }
  };

  const navigateToExplorePage = () => {
    if (page !== AppBarPages.EXPLORE) {
      setPage(AppBarPages.EXPLORE);
      navigate('/explore');
    }
  };

  const navigateToAboutPage = () => {
    if (page !== AppBarPages.ABOUT) {
      setPage(AppBarPages.ABOUT);
      navigate('/about');
    }
  };

  const toggleShowMenu = () => {
    setShowMenu(showMenu => !showMenu);
  }

  return (
    <s.AppBarContainer>
      <s.HomeButton onClick={navigateToHomePage}>
        <s.HomeButtonImage src={logo} alt="Dab Hands Logo" />
        <s.HomeButtonText>Dab Hands</s.HomeButtonText>
      </s.HomeButton>

      <MediaQuery minWidth={800}>
        <s.PageButtons>
          <s.PageButton onClick={navigateToModelPage}>3D Model</s.PageButton>
          <s.PageButton onClick={navigateToScanImagePage}>Scan Image</s.PageButton>
          <s.PageButton onClick={navigateToExplorePage}>Explore</s.PageButton>
          <s.PageButton onClick={navigateToAboutPage}>About</s.PageButton>
        </s.PageButtons>
      </MediaQuery>

      <MediaQuery maxWidth={800}>
        <s.MenuButton onClick={toggleShowMenu}>
          <s.MenuButtonIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </s.MenuButtonIcon>
        </s.MenuButton>

        <s.Menu style={{display: showMenu ? '' : 'none'}}>
          <s.MenuPageButton onClick={navigateToModelPage}>3D Model</s.MenuPageButton>
          <s.MenuPageButton onClick={navigateToScanImagePage}>Scan Image</s.MenuPageButton>
          <s.MenuPageButton onClick={navigateToExplorePage}>Explore</s.MenuPageButton>
          <s.MenuPageButton onClick={navigateToAboutPage}>About</s.MenuPageButton>
        </s.Menu>
      </MediaQuery>
    </s.AppBarContainer>

  );
};
