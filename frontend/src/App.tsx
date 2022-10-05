import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { About } from './components/About/About';
import { Home } from './components/Home/Home';
import { defaultTheme } from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
