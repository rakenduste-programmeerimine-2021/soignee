import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Navigate } from 'react-router';
import Box from '@mui/material/Box';

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

  function itemSubmitHandler(item) {
    fetch('http://localhost:8081/api/items/create', {
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