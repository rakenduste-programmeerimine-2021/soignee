import React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect} from 'react';
import { Navigate, useParams } from 'react-router';
import ProfileInfo from '../components/ProfileInfo';
import MyProfileItems from '../components/ProfileItems';

const theme = createTheme();

function OtherProfile({loginok}) {
  let params = useParams();
  let userId = params.user_id
  const [info, setInfo] = useState({
    "firstName": "",
    "lastName": "",
    "email": ""
  })
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(async () => {
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


export default OtherProfile;