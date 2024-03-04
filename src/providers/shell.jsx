import { BrowserRouter as Router } from 'react-router-dom';
import PropType from 'prop-types';
import { CssVarsProvider } from '@mui/joy/styles';
import { mainTheme } from '../theme';
import CssBaseline from '@mui/joy/CssBaseline';

export const Shell = ({ children }) => {
  return (
    <CssVarsProvider theme={mainTheme}>
      <CssBaseline />
      <Router>{children}</Router>
    </CssVarsProvider>
  );
};

Shell.propTypes = {
  children: PropType.node.isRequired,
};
