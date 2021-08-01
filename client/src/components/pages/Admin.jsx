import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  loadAllCategories,
  removeCategory,
  selectAllCategories, setEditingCategory,
} from "../../redux/features/categories";
import {
  addSchool,
  loadAllSchools,
  removeSchool,
  selectAllSchools, selectSchoolsLoading, setEditingSchool,
} from "../../redux/features/schools";
import {
  Button, CircularProgress,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import EditCategoryDialog from '../EditCategoryDialog';
import EditSchoolDialog from '../EditSchoolDialog';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Admin() {
  const dispatch = useDispatch();
  const schools = useSelector(selectAllSchools);
  const categories = useSelector(selectAllCategories);
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadAllSchools());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadAllCategories());
  }, [dispatch]);
//======================================================
  const handleRemoveSchool = (id) => {
    dispatch(removeSchool(id));
  };
  const handleRemoveCategory = (categoryId) => {
    dispatch(removeCategory(categoryId));
  };

  //======================================================

  const [categoryName, setCategoryName] = useState("");
  const saveCategoryName = (e) => {
    setCategoryName(e.target.value)};

  const handleAddName = () => {
    dispatch(addCategory(categoryName));
    setCategoryName("")};

  //======================================================

  const [schoolName, setSchoolName] = useState('')
  const saveSchoolName = (e) => {
    setSchoolName(e.target.value)}

  const [schoolCategory, setSchoolCategory] = useState('')
  const saveSchoolCategory = (e) => {
    setSchoolCategory(e.target.value)}

  const [schoolLogo, setSchoolLogo] = useState('')
  const saveSchoolLogo = (e) => {
    setSchoolLogo(e.target.value)}

  const [schoolRating, setSchoolRating] = useState('')
  const saveSchoolRating = (e) => {
    setSchoolRating(e.target.value)}

  const [schoolOnline, setSchoolOnline] = useState('')
  const saveSchoolOnline = (e) => {
    setSchoolOnline(e.target.value)
  }

  const [schoolPrice, setSchoolPrice] = useState('')
  const saveSchoolPrice = (e) => {
    setSchoolPrice(e.target.value)
  }

  const [schoolDescription, setSchoolDescription] = useState('')
  const saveSchoolDescription = (e) => {
    setSchoolDescription(e.target.value)
  }

  const [schoolLocation, setSchoolLocation] = useState('')
  const saveSchoolLocation = (e) => {
    setSchoolLocation(e.target.value)
  }

  const [schoolTerm, setSchoolTerm] = useState('')
  const saveSchoolTerm = (e) => {
    setSchoolTerm(e.target.value)
  }

  const handleAddSchool = () => {
    dispatch(addSchool({
      name: schoolName,
      category: schoolCategory,
      logo: schoolLogo,
      rating: schoolRating,
      onlineOption: schoolOnline,
      price: schoolPrice,
      description: schoolDescription,
      location: schoolLocation,
      term: schoolTerm
    }) )
  }

  //======================================================

  const [open, setOpen] = useState(false);

  const [schoolOpen, setSchoolOpen] = useState(false)

  const handleClickOpen = (category) => {
    dispatch(setEditingCategory(category))
    setOpen(true);
  };

  const handleClickOpenSchool = (school) => {
    dispatch(setEditingSchool(school))
    setSchoolOpen(true);

  };

  const loading = useSelector(selectSchoolsLoading);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Категории</TableCell>
          </TableRow>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  placeholder="название категории"
                  label="название категории"
                  onChange={saveCategoryName}
                  value={categoryName}
                />
              </TableCell>
              <TableCell>
                <Button onClick={handleAddName}>Добавить</Button>
              </TableCell>
            </TableRow>
            {categories.map((category) => (
              <TableRow key={category.name}>
                <TableCell>{category.name}</TableCell>
                <TableCell>ID: {category._id}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleClickOpen(category)}>Изменить</Button>
                  <Button
                    onClick={() => {
                      handleRemoveCategory(category._id);
                    }}
                  >
                    Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <EditCategoryDialog setOpen={setOpen} open={open}/>
          </TableBody>
          <TableRow>
            <TableCell>Школа</TableCell>
            <TableCell align="right">Категория</TableCell>
            <TableCell align="right">Лого</TableCell>
            <TableCell align="right">Рейтинг</TableCell>
            <TableCell align="right">Онлайн</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Описание</TableCell>
            <TableCell align="right">Локация</TableCell>
            <TableCell align="right">Срок(месяцев)</TableCell>
            <TableCell align="right">Добавлено</TableCell>
            <TableCell align="right">Изменено</TableCell>
            <TableCell align="right">Инструменты</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField
                placeholder="название школы"
                label="название школы"
                onChange={saveSchoolName}
                value={schoolName}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="ID категории"
                label="ID категории"
                onChange={saveSchoolCategory}
                value={schoolCategory}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="ссылка на лого"
                label="ссылка на лого"
                onChange={saveSchoolLogo}
                value={schoolLogo}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="1-10"
                label="1-10"
                onChange={saveSchoolRating}
                value={schoolRating}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="true/false"
                label="true/false"
                onChange={saveSchoolOnline}
                value={schoolOnline}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="цена Р"
                label="цена Р"
                onChange={saveSchoolPrice}
                value={schoolPrice}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="описание"
                label="описание"
                onChange={saveSchoolDescription}
                value={schoolDescription}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="город"
                label="город"
                onChange={saveSchoolLocation}
                value={schoolLocation}
              />
            </TableCell>
            <TableCell align="right">
              <TextField
                placeholder="срок(месяцев)"
                label="срок(месяцев)"
                onChange={saveSchoolTerm}
                value={schoolTerm}
              />
            </TableCell>
            <TableCell align="right">
              {' '}
            </TableCell>
            <TableCell align="right">
              {' '}
            </TableCell>
            <TableCell>
              <Button onClick={handleAddSchool}>Добавить</Button>
            </TableCell>
          </TableRow>
          {schools.map((school) => (
            <TableRow key={school.name}>
              <TableCell component="th" scope="row">
                {school.name}
              </TableCell>
              <TableCell align="right">{school.category?.name}</TableCell>
              <TableCell align="right">{school.logo}</TableCell>
              <TableCell align="right">{school.rating}</TableCell>
              <TableCell align="right">
                {school.onlineOption ? "Есть" : "Нет"}
              </TableCell>
              <TableCell align="right">{school.price}</TableCell>
              <TableCell align="right">{school.description}</TableCell>
              <TableCell align="right">{school.location}</TableCell>
              <TableCell align="right">{school.term}</TableCell>
              <TableCell align="right">{school.createdAt}</TableCell>
              <TableCell align="right">{school.updatedAt}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleClickOpenSchool(school)}>Изменить</Button>
                <Button
                  onClick={() => {
                    handleRemoveSchool(school._id);
                  }}
                >
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <EditSchoolDialog setSchoolOpen={setSchoolOpen} schoolOpen={schoolOpen}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Admin;
