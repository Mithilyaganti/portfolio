// Container.jsx
import styled from 'styled-components';
import { useTheme } from './ThemeContext';

const Container = styled.div`
  width: 100vw; /* Use the full viewport width */
  margin: 0; /* Remove any margin */
  padding: 20px; /* Add padding for inner content */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#333')};
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  overflow-y: auto;
  min-height: calc(100vh - 100px); /* Ensure it occupies vertical space as required */
  box-sizing: border-box; /* Include padding in the total width and height */
`;

const ThemedContainer = ({ children }) => {
  const { theme } = useTheme();
  return <Container theme={theme}>{children}</Container>;
};

export default ThemedContainer;
