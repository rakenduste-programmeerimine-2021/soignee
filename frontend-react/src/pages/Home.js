import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

import AuthService from "../Auth/AuthService";
import LatestItemsHome from '../components/latestItemsHome';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

function Home({setAuth}) {
  
  useEffect(() => {
    if (localStorage.getItem("user")) {
        setAuth(localStorage.getItem("user"));
      }
  }, []);
  
  
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
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '100%' },
              }}
              noValidate
              autoComplete="off"
            >
  
              
              <TextField id="filled-basic" label="Search" variant="filled" />
              
            </Box>
          </Container>
        </Box>
        <Container sx={{ py: 2 }} maxWidth="md">
          <LatestItemsHome/>
        </Container>
    </ThemeProvider>
  );
}

export default Home;