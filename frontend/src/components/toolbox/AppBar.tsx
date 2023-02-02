/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import MediaQuery from 'react-responsive';
import * as s from './AppBar.theme';
import logo from '../../util/logo/logo.jpg';
import NavigationContext from '../../contexts/NavigationContext';

export const AppBar: React.FC = () => {
  const navigationContext = useContext(NavigationContext);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleShowMenu = () => {
    setShowMenu(showMenu => !showMenu);
  }


  return (
    <s.AppBarContainer>
      <s.HomeButton onClick={navigationContext.navigateToHomePage}>
        <s.HomeButtonImage src={logo} alt="Dab Hands Logo" />
        <s.HomeButtonText>Dab Hands</s.HomeButtonText>
      </s.HomeButton>


      <MediaQuery minWidth={800}>
        <s.Dates> 8th March - 31st July </s.Dates>
        <s.PageButtons>
          <s.PageButton onClick={navigationContext.navigateToModelPage}>3D Model</s.PageButton>
          <s.PageButton onClick={navigationContext.navigateToScanImagePage}>Scan Image</s.PageButton>
          <s.PageButton onClick={navigationContext.navigateToExplorePage}>Explore</s.PageButton>
          <s.PageButton onClick={navigationContext.navigateToAboutPage}>About</s.PageButton>
        </s.PageButtons>
      </MediaQuery>

      <MediaQuery maxWidth={799}>
        <s.Dates mobile={true}> 8th March - 31st July </s.Dates>
        <s.MenuButton onClick={toggleShowMenu}>
          <s.MenuButtonIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </s.MenuButtonIcon>
        </s.MenuButton>

        <s.Menu style={{display: showMenu ? '' : 'none'}}>
          <s.MenuPageButton onClick={() => { toggleShowMenu(); navigationContext.navigateToModelPage(); } }>3D Model</s.MenuPageButton>
          <s.MenuPageButton onClick={() => { toggleShowMenu(); navigationContext.navigateToScanImagePage(); } }>Scan Image</s.MenuPageButton>
          <s.MenuPageButton onClick={() => { toggleShowMenu(); navigationContext.navigateToExplorePage(); } }>Explore</s.MenuPageButton>
          <s.MenuPageButton  onClick={() => { toggleShowMenu(); navigationContext.navigateToAboutPage(); }}>About</s.MenuPageButton>
        </s.Menu>
      </MediaQuery>
    </s.AppBarContainer>

  );
};
