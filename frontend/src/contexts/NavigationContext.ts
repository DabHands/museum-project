/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

const NavigationContext = createContext({
  Pages: {},
  navigateToHomePage: () => { },
  navigateToModelPage: () => { },
  navigateToScanImagePage: () => { },
  navigateToExplorePage: () => { },
  navigateToAboutPage: () => { },
  navigateToDonaldPage: () => { },
  navigateToStoryPage: () => { },
});

export default NavigationContext;