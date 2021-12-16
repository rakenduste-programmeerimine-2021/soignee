import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Navigate } from 'react-router';

import AddListingForm from '../components/AddListingForm';

const theme = createTheme();

function AddListing({loginok}) {
  
  const [resultNotif, setResultNotif] = useState([]);

  if (!loginok) {
    return (
      <Navigate to="/login" />
      // navigate("/login", { replace: true })
    )
  }

  // function itemSubmitHandler(item) {
  //   fetch('http://localhost:8081/api/items/create', {
  //       method: 'POST',
  //       body: JSON.stringify(item),
  //       headers: {'Content-Type':'application/json'}
  //   }).then(res => { 
  //     if(res.status===200){
  //       setResultNotif('Successfully added a new listing!');
  //     }
  //     return res.json(); 
  //     });
  // }

  function itemSubmitHandler(item) {
    fetch('http://localhost:8081/api/imageUpload/upload-image', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {'Content-Type':'application/json'}
    }).then(res => { 
      if(res.status===200){
        setResultNotif('Successfully added a new listing!');
      }
      return res.json(); 
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <AddListingForm onAddItem={itemSubmitHandler} resultNotif={resultNotif} setResultNotif={setResultNotif}/>
      </Container>
    </ThemeProvider>
  );
}


export default AddListing;