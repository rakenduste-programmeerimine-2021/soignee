import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Navigate } from 'react-router';

import AddListingForm from '../components/AddListingForm';

const theme = createTheme();

function AddListing({loginok, setLoginok}) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
        setLoginok(true);
      }
  }, []);

  if (!loginok) {
    return (
      <Navigate to="/login" />
      // navigate("/login", { replace: true })
    )
  }
  
  function itemSubmitHandler(item){
    return axios.post('http://localhost:8081/api/items/create', {
      item
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