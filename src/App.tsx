import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './theme/theme';
import Home from './pages/Home';
import UFC from './pages/UFC';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ufc" element={<UFC />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

