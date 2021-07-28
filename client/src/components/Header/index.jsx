import React, { useEffect } from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Categories from "../Categories";
import {
  loadAllCategories,
  selectAllCategories,
} from "../../redux/features/categories";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Router } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Header({ isOpen }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = useSelector(selectAllCategories);

  useEffect(() => {
    dispatch(loadAllCategories());
  }, [dispatch]);

  return (
    <>
      <AppBar position="static" style={{ background: "black" }}>
        <Toolbar variant="dense">
          <IconButton
            onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {categories.map((category) => {
              return (
                <MenuItem onClick={handleClose}>
                    <p>{category.name}</p>
                </MenuItem>
              );
            })}
          </Menu>
          <Typography variant="h6" color="inherit">
            Сравни
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
