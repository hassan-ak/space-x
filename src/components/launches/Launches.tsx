// Imports
// React Imports
import React from 'react';
// Material Ui Imports
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
// Images Imports
import succeeded from '../../asserts/images/succeeded.png';
import failed from '../../asserts/images/failed.png';
import upComming from '../../asserts/images/upcomming.png';

// Launches Page
export const Launches = () => {
    return (
        <div className="launchesContainer">
            <Grid container className="launchesGrid">
                {/* Succeeded */}
                <Grid item xs={10} md={3} component={Card} className="lgCard lgSucceeded">
                    <CardContent className="launchesCard">
                        <img src={succeeded} className="launchesImage" alt="succeeded" />
                        <Typography variant="h5" color="textSecondary" align="center" gutterBottom >
                            Succeeded
                        </Typography>
                    </CardContent>
                </Grid>
                {/* Failed */}
                <Grid item xs={10} md={3} component={Card} className="lgCard lgFailed">
                    <CardContent className="launchesCard">
                        <img src={failed} className="launchesImage" alt="failed" />
                        <Typography variant="h5" color="textSecondary" align="center" gutterBottom >
                            Failed
                        </Typography>
                    </CardContent>
                </Grid>
                {/* UpComming */}
                <Grid item xs={10} md={3} component={Card} className="lgCard lgUpComming">
                    <CardContent className="launchesCard">
                        <img src={upComming} className="launchesImage" alt="upcomming" />
                        <Typography variant="h5" color="textSecondary" align="center" gutterBottom >
                            Up-Comming
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}