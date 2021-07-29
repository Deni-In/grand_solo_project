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

function School({ id, name, category, logo }) {
  const classes = useStyles();

  const history = useHistory();

  const handleOpenSchoolPage = () => {
    history.push(`/school/${id}`);
  };

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
        </CardActions>
      </Card>
    </Box>
  );
}

export default School;
