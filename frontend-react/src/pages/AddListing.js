import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Navigate } from 'react-router';

import AddListingForm from '../components/AddListingForm';

const theme = createTheme();

function AddListing({loginok}) {

  if (!loginok) {
    return (
      <Navigate to="/login" />
      // navigate("/login", { replace: true })
    )
  }
  
// function itemSubmitHandler(){
    
//     const brandName = "brandName"
//     const model = "model"
//     const quality = 10
//     const description = "description"
//     const photo = "photos"
//     const price = "price"
//     const user = "admin"
    
//     return axios.post('http://localhost:8081/api/items/create', {
//       brandName,
//       model,
//       quality,
//       description,
//       photo,
//       price,
//       user
//     })
//     .then(response => {
//       return response.data;
//     });
//   }

function itemSubmitHandler(item) {
  //console.log(item);
  fetch('http://localhost:8081/api/items/create', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {'Content-Type':'application/json'}
  });
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <AddListingForm onAddItem={itemSubmitHandler}/>
      </Container>
    </ThemeProvider>
  );
}


export default AddListing;