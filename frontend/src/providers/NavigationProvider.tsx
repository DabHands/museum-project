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
  }

  const [page, setPage] = useState<Pages>(Pages.HOME);

  const navigateToHomePage = () => {
    if (page !== Pages.HOME) {
      setPage(Pages.HOME);
      navigate('/');
    }
  };

  const navigateToModelPage = () => {
    if (page !== Pages.MODEL) {
      setPage(Pages.MODEL);
      navigate('/model');
    }
  };

  const navigateToScanImagePage = () => {
    if (page !== Pages.SCAN_IMAGE) {
      setPage(Pages.SCAN_IMAGE);
      navigate('/image-scanning');
    }
  };

  const navigateToExplorePage = () => {
    if (page !== Pages.EXPLORE) {
      setPage(Pages.EXPLORE);
      navigate('/explore');
    }
  };

  const navigateToAboutPage = () => {
    if (page !== Pages.ABOUT) {
      setPage(Pages.ABOUT);
      navigate('/about');
    }
  };

  const context = {
    Pages,
    navigateToHomePage,
    navigateToModelPage,
    navigateToScanImagePage,
    navigateToExplorePage,
    navigateToAboutPage
  };

  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
