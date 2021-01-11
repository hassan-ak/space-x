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
// Routers Imports
import { Link } from 'react-router-dom';
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
                            <Link to="/" className="">
                                <IconButton
                                    edge="start"
                                    aria-label="SpaceX">
                                    <img src={logo} alt="logo" />
                                </IconButton>
                            </Link>
                        </Grid>
                        {/* Menu Entries */}
                        <Grid item xs={7} className={classes.headerMenu}>
                            <Grid item xs={3}>
                                <Link to="/launches" className="link">
                                    <Typography variant="h6" className={classes.headerMenuElement}>
                                        Launches
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                <Link to="/launches/succeeded" className="link">
                                    <Typography variant="h6" className={classes.headerMenuElement}>
                                        Succeeded
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                <Link to="/launches/failed" className="link">
                                    <Typography variant="h6" className={classes.headerMenuElement}>
                                        Failed
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={3}>
                                <Link to="/launches/upcomming" className="link">
                                    <Typography variant="h6" className={classes.headerMenuElement}>
                                        Up-Comming
                                    </Typography>
                                </Link>
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
                                <MenuItem onClick={handleClose} className={classes.headerMenuList}><Link to="/" className="link">Home</Link></MenuItem>
                                <MenuItem onClick={handleClose} className={classes.headerMenuList}><Link to="/launches" className="link">Launches</Link></MenuItem>
                                <MenuItem onClick={handleClose} className={classes.headerMenuList}><Link to="/launches/succeeded" className="link">Succeeded</Link></MenuItem>
                                <MenuItem onClick={handleClose} className={classes.headerMenuList}><Link to="/launches/failed" className="link">Failed</Link></MenuItem>
                                <MenuItem onClick={handleClose} className={classes.headerMenuList}><Link to="/launches/upcomming" className="link">Up-Comming</Link></MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}