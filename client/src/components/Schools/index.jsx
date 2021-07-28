import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectAllSchools } from "../../redux/features/schools";
import School from "./School";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: theme.spacing(2),
    },
  };
});

function Schools() {
  const schools = useSelector(selectAllSchools);

  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.root }} variant="outlined" square>
      {schools.map((school) => {
        return (
          <School
            key={school._id}
            name={school.name}
            id={school._id}
            logo={school.logo}
            category={school.category._id}
          />
        );
      })}
    </Paper>
  );
}

export default Schools;
