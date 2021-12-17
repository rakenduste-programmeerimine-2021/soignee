import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect} from 'react';
import { Navigate, useParams } from 'react-router';
import ProfileInfo from '../components/ProfileInfo';
import MyProfileItems from '../components/ProfileItems';
import { Box, Button } from '@mui/material';

const theme = createTheme();

function OtherProfile({loginok}) {

  let { user_id } = useParams();

  const [info, setInfo] = useState({
    "firstName": "",
    "lastName": "",
    "email": ""
  })
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(async () => {
    
    const myItems = await fetch(`http://localhost:8081/api/items/myitems/${user_id}`).then(res => { 
        return res.json(); 
    }).then(data => {
        setLoadedItems(data);
    });

    const userProfile = await fetch(`http://localhost:8081/api/auth/profile/${user_id}`).then(res => {
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
      return (<div>Loading...</div>);
  }
 
  function subscriptions(){
    if(localStorage.userId != {user_id}){
      return (
        <Box sx={{margin: "0 0 50px", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
        const isSubscribed = ? <Button variant="contained">Subscribe</Button> :<Button variant="outlined">Unsubscribe</Button>;
        </Box>)
    }else{
      return;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ pt: 2, textAlign: "center"}} maxWidth="xs">
      </Container>
      <ProfileInfo info={info}/>
      {/* subscriptions(); */}
      <Box sx={{margin: "0 0 50px", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
        <Button variant="contained">Subscribe</Button>
        <Button variant="outlined">Unsubscribe</Button>
      </Box>
      <Container sx={{ py: 2 }} maxWidth="md">
        <MyProfileItems loadedItems={loadedItems} userId={user_id}/>
      </Container>
    </ThemeProvider>
    );
}


export default OtherProfile;