import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import BlogGrid from "./components/BlogGrid";
import AboutPage from "./pages/AboutPage";
import PostPage from "./pages/PostPage";

// Define a theme for consistent colors (optional)
const theme = {
  colors: {
    primary: "#007BFF",
    background: "#F9F9F9",
    text: "#333",
  },
};

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<BlogGrid />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
