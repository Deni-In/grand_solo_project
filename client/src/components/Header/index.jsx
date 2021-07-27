import React from 'react';
import {AppBar, IconButton, makeStyles, Toolbar} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}))

function Header() {
    const classes = useStyles();

    return (
        <>
        <AppBar position="static">
            <Toolbar variant='dense'>
                <IconButton edge='start' className={classes.menuButton}  color='inherit' aria-label='menu'>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
            <Toolbar/>
        </>
    );
}

export default Header;