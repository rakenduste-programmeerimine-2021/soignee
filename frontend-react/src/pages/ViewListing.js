import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import CardMedia from '@mui/material/CardMedia';


const theme = createTheme();

function ViewListing({loginok}) {

  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItem, setLoadedItem] = useState();

  useEffect(() => {
    fetch('http://localhost:8081/api/items/single/' + id).then(res => { 
    return res.json(); 
    }).then(data => {
    setLoadedItem(data);
    // console.log(data);
    setIsLoading(false);
    });
    },[]);

  if (!loginok) {
    return (
      <Navigate to="/login" />
    ) 
  }
  
  if (isLoading) {
      return (<div>Loading...</div>);
  }

  console.log(loadedItem);

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
              textAlign: "center",
              justifyContent: 'center'
            }}
        >
          <Stack spacing={2}>
            <Box>
              <Typography sx={{ minHeight: "60px", fontWeight: "700"}} component="h2" variant="h2">
                  {loadedItem[0]["brandName"]} 
              </Typography>
            </Box>
            <CardMedia 
              component="img"
              sx={{
                pt: '0%',
              }}
              maxHeight="200"
              margin="auto"
              image={`http://localhost:8081/api/image/${loadedItem[0]["photo"]}`}        
            />
            <Box>
              <Typography sx={{ minHeight: "60px", fontWeight: "700" }} component="h5" variant="h5">
                  Model: {loadedItem[0]["model"]}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ minHeight: "60px", fontWeight: "700"}} component="h5" variant="h5">
                  Price: {loadedItem[0]["price"]}€
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ minHeight: "60px", fontWeight: "700"}} component="h5" variant="h5">
                  Description 
                  <Typography sx={{ fontSize: "1.5rem", p: "20px", fontWeight: "300"}} component="p" variant="p">
                  {loadedItem[0]["description"]}
                  </Typography>
              </Typography>
            </Box>
            <Typography sx={{ minHeight: "60px", fontWeight: "700"}} component="h5" variant="h5">
                  Posted at: 
                  <Typography sx={{ fontSize: "1.5rem", p: "20px", fontWeight: "300"}} component="p" variant="p">
                  {loadedItem[0]["createdAt"]}
                  </Typography>
              </Typography>
          </Stack>

        </Box>
      </Container>
    </ThemeProvider>
  );
}


export default ViewListing;