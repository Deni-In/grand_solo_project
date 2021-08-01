import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectComparingSpace } from '../../redux/features/schools';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flex: "0 50%",
      padding: theme.spacing(2),
    },

    media: {
      maxWidth: "100%",
      maxHeight: 250,
      backgroundSize: "100%",
    },
  };
});

function School({ id, name, category, logo, school }) {

  const dispatch = useDispatch()

  const comparingSpace = useSelector(selectComparingSpace)
  const classes = useStyles();

  const history = useHistory();

  const handleOpenSchoolPage = () => {
    history.push(`/school/${id}`);
  };

  const handleCompare = (school) => {
    if (comparingSpace.length < 2) {
      dispatch({ type: "compare/school/add", payload: school})
    } else {
      alert("Уже выбрано 2 школы!")
    }
  }

  return (
    <Box classes={{ root: classes.root }}>
      <Card>
        <div>
          <CardMedia
            component={"img"}
            classes={{ img: classes.media }}
            image={logo}
            title={name}
            style={{ width: 300, height: 200 }}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant={"h6"} component="div">
            <Typography color="textSecondary" variant="body2" component="span">
              {category.name}
            </Typography>{" "}
            / {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={handleOpenSchoolPage}>
            Перейти
          </Button>
          <Button color="primary" variant="contained" onClick={() => handleCompare(school)}>
            Сравнить
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default School;
