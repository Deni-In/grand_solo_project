import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectComparingSpace, selectSchoolsLoading} from "../../redux/features/schools";
import {
    Button,
    CircularProgress,
    makeStyles,
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

function Compare(props) {

    const classes = useStyles();

    const dispatch = useDispatch()

    const comparingSpace = useSelector(selectComparingSpace)

    const loading = useSelector(selectSchoolsLoading);

    if (loading) {
        return <CircularProgress />;
    }

    const handleRemoveFromSpace = (school) => {
        dispatch({ type: 'compare/school/remove', payload: school})
    }
    if (comparingSpace.length < 2) {
        return (
          <div>
              <h1>
                  Выберите 2 школы
              </h1>
          </div>
        )
    } else {
        return (
          <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell style={{ width: 100}}>
                              <TableRow>
                                  <TableCell>Название</TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>Категория</TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>Цена</TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>Срок</TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>Город</TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>Онлайн</TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell><Button>Удалить</Button></TableCell>
                              </TableRow>
                          </TableCell>
                          <TableCell style={{ width: 100}}>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[0].name}
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[0].category?.name}
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[0].price}
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[0].term}
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[0].location}
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[0].onlineOption ? "Да" : "Нет"}
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      <Button onClick={() => handleRemoveFromSpace(comparingSpace[0])}>X</Button>
                                  </TableCell>
                              </TableRow>
                          </TableCell>
                          <TableCell style={{ width: 100}}>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[1].name}
                                  </TableCell>

                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[1]?.category?.name}
                                  </TableCell>

                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[1].price}
                                  </TableCell>

                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[1].term}
                                  </TableCell>

                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[1].location}
                                  </TableCell>

                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      {comparingSpace[1].onlineOption ? "Да" : "Нет"}
                                  </TableCell>
                              </TableRow>
                              <TableRow>
                                  <TableCell>
                                      <Button onClick={() => handleRemoveFromSpace(comparingSpace[1])}>X</Button>
                                  </TableCell>
                              </TableRow>
                          </TableCell>
                      </TableRow>
                  </TableHead>
              </Table>
          </TableContainer>
        );
    }
}

export default Compare;