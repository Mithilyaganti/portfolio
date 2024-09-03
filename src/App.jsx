// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Dock from './components/Dock';
import Home from './components/Home';
import ThemedContainer from './components/Container';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Resume from './components/Resume';
import { ThemeProvider, useTheme } from './components/ThemeContext';



const AppWrapper = styled.div`
  width: calc(100vw - 40px); /* Full viewport width minus side margins */
  min-height: calc(100vh - 100px); /* Full viewport height minus top margin and space for dock */
  background-color: ${({ theme }) => (theme === 'light' ? '#f0f0f0' : '#121212')};
  display: flex;
  flex-direction: column;
  padding: 20px; /* Inner padding for window-like appearance */
  margin: 20px auto; /* Top margin and centered horizontally */
  box-sizing: border-box;
  border-radius: 12px; /* Rounded corners for Mac OS window look */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  overflow: hidden; /* Prevent content overflow */
`;

// // Dock component that sits at the bottom
// const Dock = styled.div`
//   width: 100vw;
//   height: 60px; /* Height of the dock */
//   background-color: #2c2c2c; /* Dark background for the dock */
//   position: fixed;
//   bottom: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2); /* Shadow above the dock */
//   z-index: 10; /* Ensure the dock stays above other elements */
// `;

const ContentWrapper = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  width: 100%;
`;

const AppContent = () => {
  const { theme } = useTheme();
  return (
    <StyledThemeProvider theme={{ mode: theme }}>
      <AppWrapper theme={theme}>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<ThemedContainer><Home /></ThemedContainer>} />
            <Route path="/contact" element={<ThemedContainer><Contact /></ThemedContainer>} />
            <Route path="/projects" element={<ThemedContainer><Projects /></ThemedContainer>} />
            <Route path="/blog" element={<ThemedContainer><Blog /></ThemedContainer>} />
            <Route path="/resume" element={<ThemedContainer><Resume /></ThemedContainer>} />
          </Routes>
        </ContentWrapper>
        <Dock />
      </AppWrapper>
    </StyledThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
