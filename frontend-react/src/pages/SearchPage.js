import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate, useParams } from 'react-router';
import TextField from '@mui/material/TextField';


import SearchResult from '../components/SearchResult';

const theme = createTheme();

function SearchPage() {
  let { filter } = useParams();  
  const [searchQuery, setSearchQuery] = useState(filter);

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
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            soignée<br/>
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
              ADJECTIVE<br/>
              dressed and groomed elegantly and with great care
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="filled-basic" label="Search" variant="filled" onChange={e => setSearchQuery(e.target.value)}/>
          </Box>
        </Container>
      </Box>
      <Container sx={{ py: 2 }} maxWidth="md">
        <SearchResult filter={filter}/>
      </Container>
  </ThemeProvider>
  );
}

export default SearchPage