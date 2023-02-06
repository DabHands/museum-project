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
import { DonaldSammut } from './components/DonaldSammut/DonaldSammut';
import { Story } from './components/Story/Story';

const AppWrapper = styled.div` 
  font-family: ${props => props.theme.FONT_FAMILY};
  //background-color : ${props => props.theme.BACKGROUND_COLOUR}; // Please change in index.css instead of here!
  font-size: ${props => props.theme.fonts.size.MEDIUM};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppWrapper>
        <NavigationProvider>
        
          <AppBar />
          <Routes>
            
            <Route path={process.env.PUBLIC_URL + "/about"} element={<About />} />
            <Route path={process.env.PUBLIC_URL + "/explore"} element={<Explore />} />
            <Route path={process.env.PUBLIC_URL + "/explore/:id"} element={<SingleEmbroidery />} />
            <Route path={process.env.PUBLIC_URL + "/model"} element={<Model />} />
            <Route path={process.env.PUBLIC_URL + "/image-scanning"} element={<ImageScan />} />
            <Route path={process.env.PUBLIC_URL + "/donald-sammut"} element={<DonaldSammut />} />
            <Route path={process.env.PUBLIC_URL + "/the-story"} element={<Story />} />
            <Route path={process.env.PUBLIC_URL + "/*"} element={<Home />} />
          </Routes>
          <Footer/>
        </NavigationProvider>
      </AppWrapper>
    </ThemeProvider>

  );
}

export default App;
