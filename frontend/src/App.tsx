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

const AppWrapper = styled.div` 
  font-family: ${props => props.theme.FONT_FAMILY};
  background-color : ${props => props.theme.BACKGROUND_COLOUR};
`;

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationProvider>
        <AppWrapper>
          <AppBar />
          <Routes>
            
            <Route path={process.env.PUBLIC_URL + "/about"} element={<About />} />
            <Route path={process.env.PUBLIC_URL + "/explore"} element={<Explore />} />
            <Route path={process.env.PUBLIC_URL + "/explore/:id"} element={<SingleEmbroidery />} />
            <Route path={process.env.PUBLIC_URL + "/model"} element={<Model />} />
            <Route path={process.env.PUBLIC_URL + "/image-scanning"} element={<ImageScan />} />
            <Route path={process.env.PUBLIC_URL + "/*"} element={<Home />} />
          </Routes>
        </AppWrapper>
      </NavigationProvider>
    </ThemeProvider>

  );
}

export default App;
