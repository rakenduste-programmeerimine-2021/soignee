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
import MyProfileItems from '../components/MyProfileItems';

const theme = createTheme();



function Profile({loginok}) {

  const [info, setInfo] = useState({
    "firstName": "",
    "lastName": "",
    "email": ""
  })
  
  const [userId, setUserId] = useState(localStorage.getItem("id"));
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(async () => {
    const userId = window.location.href.split('/profile/')[1];
    const myItems = await fetch(`http://localhost:8081/api/items/myitems/${userId}`).then(res => { 
        return res.json(); 
      }).then(data => {
        setLoadedItems(data);
      });

    const userProfile = await fetch(`http://localhost:8081/api/auth/profile/${userId}`).then(res => {
      return res.json();
    }).then(data => {
      setInfo({
        "firstName": data.user.firstName,
        "lastName": data.user.lastName,
        "email": data.user.email
      })
    });
    setIsLoading(false);
  },[])

  if (!loginok) {
    return (
      <Navigate to="/login" />
    ) 
  }
  
  if (isLoading) {
      return (<div>Laeb...</div>);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ pt: 2, textAlign: "center" }} maxWidth="xs">
      </Container>
      <ProfileInfo info={info}/>
      <Container sx={{ py: 2 }} maxWidth="md">
        <MyProfileItems loadedItems={loadedItems} userId={userId}/>
      </Container>
    </ThemeProvider>
    );
}


export default Profile;