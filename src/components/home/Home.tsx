// Imports
// React imports
import React from 'react'
// Material Ui Imports
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Images Imports
import home from '../../asserts/images/home.png';

// Styling for Home Page
const useStyles = makeStyles((theme) => ({
    homeMainGrid: {
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'black',
        marginTop:'100px',
        marginBottom:'100px'
    },
    homeComponentGrid: {
        backgroundColor:'black',
        padding:'20px'
    },
    launchesButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
}));

// Home Page Component
export const Home = () => {
    //  useStyles
    const classes = useStyles();
    // Home Componeent Return
    return (
        <div className="homeContainer">
            <Grid container className={classes.homeMainGrid}>
                    <Grid item xs={8} md={5} component={Card} className={classes.homeComponentGrid}> 
                        <CardContent>
                            <img src={home} className="homeImage" alt="spaceX"/>
                        </CardContent>
                    </Grid>
                    <Grid item xs={8} md={5} component={Card} className={classes.homeComponentGrid}> 
                        <CardContent className="homeContent">
                            <Typography variant= "h2" align = "center" gutterBottom >
                                SpaceX
                            </Typography>
                            <Typography variant= "h6" gutterBottom className="homeDetail" >
                                SpaceX is an American aerospace manufacturer and space transportation services company. It was founded to reduce space transportation costs for colonization of Mars.
                            </Typography>
                            <Button
                                variant="contained"
                                className={classes.launchesButton}
                            >
                                Launches
                            </Button>
                        </CardContent>
                    </Grid>
            </Grid>
        </div>
    )
}