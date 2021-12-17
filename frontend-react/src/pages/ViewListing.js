import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';

const theme = createTheme();

function ViewListing({loginok}) {

  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/api/items/single/${id}`, {
    }).then(res => { 
        return res.json(); 
    }).then(data => {
        setLoadedItems(data);
        console.log(loadedItems);
        
    });
    setIsLoading(false);
  },[])

  if (!loginok) {
    return (
      <Navigate to="/login" />
    ) 
  }
  
  if (isLoading) {
      return (<div>Loading...</div>);
  }

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




      </Box>
      </Container>
    </ThemeProvider>
  );
}


export default ViewListing;