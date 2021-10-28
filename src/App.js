import { createTheme, ThemeProvider } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import { Home } from './pages/Home';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial',
    h3: {
      fontSize: '2.7rem',
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#fdd835',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff9100',
      contrastText: '#a3a3a3',
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
