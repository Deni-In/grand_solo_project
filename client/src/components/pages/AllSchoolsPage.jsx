import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAllSchools,
  selectSchoolsLoading,
} from "../../redux/features/schools";
import { Helmet } from "react-helmet";
import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import Schools from "../Schools";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  imageCar: {
    maxWidth: "1920px",
    padding: "168px 0 70px 0",
    backgroundSize: "cover",
    borderBottom: "none",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(https://mastermindseo.org/wp-content/uploads/2015/03/header-background.png)",
    boxSizing: "border-box",
    backgroundPosition: "bottom",
  },
});

function AllSchoolsPage(props) {
  const dispatch = useDispatch();

  const loading = useSelector(selectSchoolsLoading);

  const classes = useStyles();


  useEffect(() => {
    dispatch(loadAllSchools());
  }, [dispatch]);

  if (loading) {
    return (
      <Box style={{ textAlign: "center", marginTop: "10%" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <Helmet>
        <title>Все школы</title>
      </Helmet>
      <Box className={classes.imageCar}>
        <Box>
          <h2
            style={{
              fontFamily: "Saira Condensed', sans-serif",
              fontSize: 46,
              textTransform: "uppercase",
              margin: 5,
              color: "#fff",
            }}
          >
            ВАША УВЕРЕННОСТЬ В НАШИХ РУКАХ
          </h2>
        </Box>
      </Box>
      <Schools />
    </>
  );
}

export default AllSchoolsPage;
