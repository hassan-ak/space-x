// Imports
// React Imports
import React from 'react';
// Material Ui Imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Styles for Footer
const useStyles = makeStyles((theme) => ({
    footer: {
        top: 'auto',
        bottom: 0,
        boxShadow: 'none',
    },
    footerTextContainer: {
        flexGrow: 1,
    },
    footerText: {
        color: 'white'
    },
}));

// Footer Function
export default function Footer() {
    // const for using styles
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="static" color="transparent" className={classes.footer}>
                <Toolbar>
                    <div className={classes.footerTextContainer} />
                    <Typography variant="h6" className={classes.footerText}>
                        by: Hassan Ali Khan
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}