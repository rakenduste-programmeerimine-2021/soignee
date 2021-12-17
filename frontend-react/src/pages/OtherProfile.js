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
  const [isUser, setIsUser] = useState();
  const [followers, setFollowers] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(async () => {

    if(localStorage.getItem("id") != user_id){
      setIsUser(false);
    }else{
      setIsUser(true);
    }
    
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


    const getSubscriptions = await fetch(`http://localhost:8081/api/auth/profile/${user_id}`).then(res => {
      return res.json();
    }).then(data => {
      setFollowers(data.user.followers);
      let findSub = followers.find(function(sub, index){
        console.log(findSub);
        if (sub === user_id) {
          return setIsSubscribed(true);
        }else{
          return setIsSubscribed(false);
        }
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


  //TBD subscriptions
  function subscribtionHandler(user_id) {
    fetch(`http://localhost:8081/api/auth//profiles/subscribe/${user_id}`, {
        method: 'POST',
        body: user_id,
        headers: {'Content-Type' : 'text/html'}
    }).then(res => { 
    if(res.status===200){
      console.log('Successfully subscribed!');
    }
    console.log(res);
    return res.json(); 
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ pt: 2, textAlign: "center"}} maxWidth="xs">
      </Container>
      <ProfileInfo info={info}/>

      {!isUser && (
      <Box sx={{margin: "0 0 50px", display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center"}}>
        {!isSubscribed &&(
          <Button variant="contained" onClick={subscribtionHandler}>Subscribe</Button>
        )}
        {isSubscribed &&(
          <Button variant="outlined">Unsubscribe</Button>
        )}
      </Box>
      )}

      <Container sx={{ py: 2 }} maxWidth="md">
        <MyProfileItems loadedItems={loadedItems} userId={user_id}/>
      </Container>
    </ThemeProvider>
    );
}


export default OtherProfile;