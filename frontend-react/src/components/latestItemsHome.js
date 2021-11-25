import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function LatestItemsHome() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);

    useEffect(() => {
    fetch('http://localhost:8081/api/items').then(res => { 
    return res.json(); 
    }).then(data => {
    console.log(data);
    setIsLoading(false);
    setLoadedItems(data);
    });
    },[])
    
    if (isLoading) {
        return (<div>Laeb...</div>);
    }
    
    return (        
        <Grid container spacing={4}>
            {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                <CardActionArea component={Link} to={{ pathname: '/item/' }} >
                    <CardMedia
                    component="img"
                    sx={{
                        // 16:9
                        pt: '0%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        BRANDNAME
                    </Typography>
                    <Typography>
                        Windbreaker
                    </Typography>
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
    )
}

export default LatestItemsHome