import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SearchResult from '../components/SearchResult';

const theme = createTheme();

function SearchPage() {
    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
        </Box>
        <Container sx={{ py: 2 }} maxWidth="md">
            <SearchResult />
        </Container>
    </ThemeProvider>
  );
}

export default SearchPage