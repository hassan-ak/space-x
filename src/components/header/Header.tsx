// Imports
// React Imports
import React, { useState } from 'react';
// Material UI Imports
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// Images Imports
import logo from '../../asserts/images/logo.png';

// Styles Definations for Header
const useStyles = makeStyles((theme) => ({
    headerRoot: {
        flexGrow: 1,
    },
    headerBackground: {
        backgroundColor: 'black',
    },
    headerMenu: {
        backgroundColor: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '20px',
    },
    headerMenuElement: {
        position: 'relative',
        top: '30%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    headerMenuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
    },
    headerMenuIcon: {
        position: 'relative',
        color: 'white',
        top: '30%',
    },
    headerMenuPaper: {
        backgroundColor: "black",
        border: 'none'
    },
    headerMenuList: {
        color: 'white',
        marginBottom: '10px'
    },
}));

// Header Function
export default function Header() {
    //  useStyles
    const classes = useStyles();
    //  For Controling menu button click
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //  Header Function Return
    return (
        <div className={classes.headerRoot}>
            <AppBar position="static" className={classes.headerBackground}>
                <Toolbar>
                    <Grid container spacing={2}>
                        {/* App Logo */}
                        <Grid item xs={2}>
                            <IconButton
                                edge="start"
                                aria-label="SpaceX">
                                <img src={logo} alt="logo" />
                            </IconButton>
                        </Grid>
                        {/* Menu Entries */}
                        <Grid item xs={7} className={classes.headerMenu}>
                            <Grid item xs={3}>
                                <Typography variant="h6" className={classes.headerMenuElement}>
                                    Launches
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6" className={classes.headerMenuElement}>
                                    Succeeded
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6" className={classes.headerMenuElement}>
                                    Failed
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="h6" className={classes.headerMenuElement}>
                                    Up-Comming
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* Menu Bar */}
                        <Grid item xs={2} className={classes.headerMenuButton}>
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MenuIcon className={classes.headerMenuIcon} />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                classes={{ paper: classes.headerMenuPaper }}
                            >
                                <MenuItem onClick={handleClose} className={classes.headerMenuList}>Launches</MenuItem>
                                <MenuItem onClick={handleClose} className={classes.headerMenuList}>Succeeded</MenuItem>
                                <MenuItem onClick={handleClose} className={classes.headerMenuList}>Failed</MenuItem>
                                <MenuItem onClick={handleClose} className={classes.headerMenuList}>Up-Comming</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}