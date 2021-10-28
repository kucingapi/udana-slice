import { createTheme, ThemeProvider } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import { Home } from './pages/Home';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial',
  },
  palette: {
    type: 'light',
    primary: {
      main: '#fdd835',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff9100',
      contrastText: '#000000',
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);
function App() {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
