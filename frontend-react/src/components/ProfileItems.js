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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function ProfileItems() {
  return (
      <Container sx={{ py: 2 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardActionArea component={Link} to={{ pathname: "/listing/" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "0%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      BRANDNAME
                    </Typography>
                    <Typography>Windbreaker</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small">Edit</Button>
                  <Button size="small">Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
}

export default ProfileItems;
