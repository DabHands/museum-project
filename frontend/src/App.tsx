import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route } from "react-router-dom"
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { defaultTheme } from './themes/theme';
import { AppBar } from './components/toolbox/AppBar';
import { LOCALHOST_HOME_PAGE, LOCALHOST_ABOUT_PAGE, HOME_TITLE, ABOUT_TITLE } from './constants/links';

const AppWrapper = styled.div` 
  font-family: ${props => props.theme.FONT_FAMILY};
  background-color : ${props => props.theme.BACKGROUND_COLOUR};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppWrapper>
        <AppBar
          homeHref={LOCALHOST_HOME_PAGE}
          aboutHref={LOCALHOST_ABOUT_PAGE}
          homeTitle={HOME_TITLE}
          aboutTitle={ABOUT_TITLE}
        />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
      </AppWrapper>
    </ThemeProvider>
    
  );
}

export default App;
