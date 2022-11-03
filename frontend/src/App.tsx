import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route } from "react-router-dom"
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { defaultTheme } from './themes/theme';
import { Explore } from './components/Explore/Explore';

const AppWrapper = styled.div` 
  font-family: ${props => props.theme.FONT_FAMILY};
  background-color : ${props => props.theme.BACKGROUND_COLOUR};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppWrapper>
<<<<<<< HEAD
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
=======
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
>>>>>>> ecf3e80ae177d5e2ba0386d0fc0c805b5a61b03c
      </AppWrapper>
    </ThemeProvider>
    
  );
}

export default App;
