import { Box, Typography, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import SearchComponent from 'search/search';
import ActionComponent from 'tasks/actions';
import createTheme from 'design_system/createTheme';

import Menu from './Menu';
import AppRouter from './Router';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme()}>
        <Box minHeight="100vh">
          <Box component="header" display="flex" justifyContent="space-between" my={2}>
            <Typography variant="h3" component="h1">
              Shell Application
            </Typography>
            <SearchComponent label="Search for tasks" />
          </Box>
          <Box component="section" display="flex" gap={3}>
            <ActionComponent />
            <Box component="section" flexGrow={2}>
              <Menu />
              <AppRouter />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
