import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route } from "react-router-dom"
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { defaultTheme } from './themes/theme';
import { Explore } from './components/Explore/Explore';
import { SingleEmbroidery } from './components/SingleEmbroidery/SingleEmbroidery';
import { AppBar } from './components/toolbox/AppBar';
import { Model } from './components/Model/Model';
import { ImageScan } from './components/ImageScan/ImageScan';
import NavigationProvider from './providers/NavigationProvider';
import { Footer } from './components/toolbox/Footer/Footer';

const AppWrapper = styled.div` 
  font-family: ${props => props.theme.FONT_FAMILY};
  //background-color : ${props => props.theme.BACKGROUND_COLOUR}; // Please change in index.css instead of here!
  font-size: ${props => props.theme.fonts.size.MEDIUM};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppWrapper>
        <NavigationProvider>
        
          <AppBar />
          <Routes>
            
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/:id" element={<SingleEmbroidery />} />
            <Route path="/model" element={<Model />} />
            <Route path="/image-scanning" element={<ImageScan />} />
            <Route path="/*" element={<Home />} />
          </Routes>
          <Footer/>
        </NavigationProvider>
      </AppWrapper>
    </ThemeProvider>

  );
}

export default App;
