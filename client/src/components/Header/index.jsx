import React from 'react';
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Categories from '../Categories';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}))

function Header( {isOpen}) {
    const classes = useStyles();

    if (isOpen) {
        return (
            <Categories/>
        )

    }

    const handleOpenCategories = () => {
        if (isOpen) {
            return isOpen = false
        } else {
            return isOpen = true
        }
    }

    return (
        <>
        <AppBar  position="static" style={{background: 'black'}}>
            <Toolbar variant='dense'>
                <IconButton onChange={handleOpenCategories} edge='start' className={classes.menuButton}  color='inherit' aria-label='menu'>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' color='inherit'>
                    Сравни
                </Typography>
            </Toolbar>
        </AppBar>
            <Toolbar/>
        </>
    );
}

export default Header;