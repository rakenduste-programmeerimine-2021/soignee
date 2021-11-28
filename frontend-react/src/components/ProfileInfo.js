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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import AuthService from "../Auth/AuthService";

function ProfileInfo() {

  
  return (
      <Container
        sx={{
          py: 2,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        maxWidth="md"
      >
        <Box
          sx={{
            minHeight: "250px",
            width: "50",
            flex: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",



          }}
        >
          <AccountCircleIcon sx={{
              color: "#000000",
              fontSize: "200px",
          }} />
        </Box>
        <Box
            sx={{
                display: "flex",
                flex: "1 0 auto",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }}
        >
            <Typography sx={{ minHeight: "60px", textAlign: "left"}} component="h1" variant="h5">
                First Name: 
            </Typography>
            <Typography sx={{ minHeight: "60px", textAlign: "left"}} component="h1" variant="h5">
                Last Name:
            </Typography>
            <Typography sx={{ minHeight: "60px", textAlign: "left"}} component="h1" variant="h5">
                Email: 
            </Typography>

        </Box>
      </Container>
  );
}

export default ProfileInfo;
