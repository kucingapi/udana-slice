import { createTheme, ThemeProvider } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import { Navbar } from './components/Navbar';

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
      contrastText: '#ffffff',
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
