import React, { useEffect } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams} from 'react-router-dom'
import {
  loadSingleSchoolById,
  selectSchoolsLoading,
  selectSingleSchool
} from '../../redux/features/schools';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => {
  return{
    imageBox: {
      textAlign: 'center',

      '& img': {
        width: '80%',
      },
    },

    title: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },

    actions: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),

      '& button': {
        marginRight: theme.spacing(2)
      }
    }
  }
})

function SingleSchoolPage(props) {
  const dispatch = useDispatch();

  const classes = useStyles();

  const { id } = useParams();

  const history = useHistory();

  const loading = useSelector(selectSchoolsLoading);

  const school = useSelector(selectSingleSchool(id));

  const handleBack = () => {
    history.push('/')
  }

  useEffect(() => {
    dispatch(loadSingleSchoolById(id));
  }, [dispatch, id]);

  if (loading) {
    return <CircularProgress/>
  }
  return (
    <>
    <Helmet>
      <title> Страница школы {school.name}</title>
    </Helmet>
      <Paper variant='outlined'>
        <Typography className={classes.title} variant='h3'>
          {school.name}
        </Typography>
        <Box className={classes.imageBox}>
          <img src={school.logo} alt={school.name}
          />
        </Box>
        <Divider />
        <Typography variant='h6'>
          {school.category.name} / {school.name} / {school.description}
        </Typography>
        <Divider />
        <Box className={classes.actions}>
          <Button color='default' variant='contained' onClick={handleBack}>
            Вернуться назад
          </Button>
          <Button color='primary'
                  variant='contained'>
            Сравнить
          </Button>
        </Box>
      </Paper>
    </>
  );
}

export default SingleSchoolPage;