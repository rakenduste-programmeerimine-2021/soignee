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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect} from 'react';
import { Navigate } from 'react-router';
import { borders } from '@mui/system';

import AuthService from "../Auth/AuthService";
import ProfileInfo from '../components/ProfileInfo';
import ProfileItems from '../components/ProfileItems';

const theme = createTheme();

function Profile({ setAuth, auth }) {
  
  useEffect(() => {
    if (localStorage.getItem("user")) {
        setAuth(localStorage.getItem("user"));
      }
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ pt: 2, textAlign: "center" }} maxWidth="xs">
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
      </Container>
      <ProfileInfo setAuth={setAuth}/>
      <ProfileItems />
    </ThemeProvider>
    );
}


export default Profile;