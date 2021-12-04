import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Navigate } from "react-router";
import { borders } from "@mui/system";
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';

import AuthService from "../Auth/AuthService";

function ProfileItems({loadedItems}) {
  
  return (        
      <Grid container spacing={4}>
        {loadedItems.length>0 ? 
          loadedItems.map(({brandName, model, _id, price, photo}) => (
          <Grid item key={_id} xs={12} sm={6} md={4}>
              <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
              <CardActionArea component={Link} to={{ pathname: '/item/' + _id }} >
                  <CardMedia
                  // style = {{ height: 400, paddingTop: '0%'}}
                  component="img"
                  sx={{
                      // 16:9
                      pt: '0%',
                  }}
                  height="400"
                  image={"/uploaded/" + photo}
                  alt="image"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                          {model}
                      </Typography>
                      <Grid>
                          <Typography>
                              {brandName}
                          </Typography>
                          <Typography>
                              {price+'€'}
                          </Typography>
                      </Grid>
                  </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" component={Link} to={{ pathname: '/item/edit/' + _id }}>Edit</Button>
                  <Button size="small" component={Link} to={{ pathname: '/item/delete/' + _id }}>Delete</Button>
              </CardActions>
              </Card>
          </Grid>
          )) :
          <Container sx={{ py: 2 }} maxWidth="md">
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              You currently have no added listings!
            </Box>
          </Container>
        }
      </Grid>
  );
}

export default ProfileItems;
