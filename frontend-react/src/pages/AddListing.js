import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect} from 'react';
import { Navigate } from 'react-router';
import { IconButton, Input } from '@mui/material';

const theme = createTheme();


function AddListing() {
  const [name, setName] = useState();
  const [descriotion, setDescriotion] = useState();
  const [price, setPrice] = useState();
  const [photos, setPhotos] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >          
          <Typography component="h1" variant="h5">Add New Listing</Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="listing"
              label="Listing Name"
              name="listing"
              autoFocus
              onChange={e => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              minRows={3}
              name="description"
              label="Description"
              id="description"
              onChange={e => setDescriotion(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="number"
              name="price"
              label="Price"
              id="price"
              onChange={e => setPrice(e.target.value)}
            />



            <Box
              fullWidth
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >

              <Input required accept="image/*" id="upload-photos" multiple type="file" sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                margin: ' 20px auto 0',
                cursor: 'pointer',
              }}/>

              <Box 
                sx={{
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}
              >
                  Photo-carousel
              </Box>

            </Box>      
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Listing
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


export default AddListing;