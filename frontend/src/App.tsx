import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route } from "react-router-dom"
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { defaultTheme } from './themes/theme';
import { Explore } from './components/Explore/Explore';
import { AppBar } from './components/toolbox/AppBar';
import { Model } from './components/Model/Model';
import { ImageScan } from './components/ImageScan/ImageScan';

const AppWrapper = styled.div` 
  font-family: ${props => props.theme.FONT_FAMILY};
  background-color : ${props => props.theme.BACKGROUND_COLOUR};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppWrapper>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/model" element={<Model />} />
          <Route path="/image-scanning" element={<ImageScan />} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
    
  );
}

export default App;
