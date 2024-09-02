import { createTheme } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    background: {
      default: grey[50],
      paper: '#FFF'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
