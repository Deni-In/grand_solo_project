import React, { useEffect } from "react";
import {
  AppBar, Box,
  Button, Container,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {
  loadAllCategories,
  selectAllCategories,
} from "../../redux/features/categories";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  categoryBtn: {
    textDecoration: "none",
    color: "black",
  },
  adminButton: {
    flexGrow: 2,
    marginRight: theme.spacing(2)
  }
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
      <AppBar position="fixed" style={{ background: "black" }}>
        <Container fixed>
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
                  <NavLink
                    className={classes.categoryBtn}
                    to={`/category/${category._id}`}
                  >
                    {category.name}
                  </NavLink>
                </MenuItem>
              );
            })}
          </Menu>
          <Button>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 17,
                marginTop: 1,
              }}
            >
              Главная
            </NavLink>
          </Button>
          <Button>
            <NavLink
              to="/compare"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 17,
                marginTop: 1,
              }}
            >
              Сравни
            </NavLink>
          </Button>
          <Box mr={3}>
          <Button className={classes.adminButton}>
            <NavLink
              to="/admin"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: 17,
                marginTop: 1,
              }}
            >
              Админ
            </NavLink>
          </Button>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
