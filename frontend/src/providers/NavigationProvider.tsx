import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationContext from '../contexts/NavigationContext';

interface NavigationProviderProps {
  children: React.ReactNode;
}

const NavigationProvider: React.FC<NavigationProviderProps> = ( { children }, ) => {
  const navigate = useNavigate();

  enum Pages {
    HOME,
    EXPLORE,
    ABOUT,
    MODEL,
    SCAN_IMAGE,
    DONALD,
    STORY,
  }

  const [page, setPage] = useState<Pages>(Pages.HOME);

  const navigateToHomePage = () => {
    if (page !== Pages.HOME) {
      setPage(Pages.HOME);
      navigate(process.env.PUBLIC_URL + '/');
      window.scrollTo(0, 0)
    }
  };

  const navigateToModelPage = () => {
    if (page !== Pages.MODEL) {
      setPage(Pages.MODEL);
      navigate(process.env.PUBLIC_URL + '/model');
      window.scrollTo(0, 0)
    }
  };

  const navigateToScanImagePage = () => {
    if (page !== Pages.SCAN_IMAGE) {
      setPage(Pages.SCAN_IMAGE);
      navigate(process.env.PUBLIC_URL + '/image-scanning');
      window.scrollTo(0, 0)
    }
  };

  const navigateToExplorePage = () => {
    setPage(Pages.EXPLORE);
    navigate(process.env.PUBLIC_URL + '/explore');
    window.scrollTo(0, 0)
  };

  const navigateToAboutPage = () => {
    if (page !== Pages.ABOUT) {
      setPage(Pages.ABOUT);
      navigate(process.env.PUBLIC_URL + '/about');
      window.scrollTo(0, 0)
    }
  };

  const navigateToDonaldPage = () => {
    if (page !== Pages.DONALD) {
      setPage(Pages.DONALD);
      navigate(process.env.PUBLIC_URL + '/donald-sammut');
      window.scrollTo(0, 0)
    }
  };

  const navigateToStoryPage = () => {
    if (page !== Pages.STORY) {
      setPage(Pages.STORY);
      navigate(process.env.PUBLIC_URL + '/the-story');
      window.scrollTo(0, 0)
    }
  };

  const context = {
    Pages,
    navigateToHomePage,
    navigateToModelPage,
    navigateToScanImagePage,
    navigateToExplorePage,
    navigateToAboutPage,
    navigateToDonaldPage,
    navigateToStoryPage,
  };

  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
