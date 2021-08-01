import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectComparingSpace, selectSchoolsLoading} from "../../redux/features/schools";
import {
    Button,
    CircularProgress,
    makeStyles,
    Paper,
    Table,
    TableBody,
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

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Категория</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Срок</TableCell>
                        <TableCell align="right">Город</TableCell>
                        <TableCell align="right">Онлайн</TableCell>
                        <TableCell align="right">Удалить</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {comparingSpace.map((school) => (
                        <TableRow key={school.name}>
                            <TableCell component="th" scope="row">
                                {school.name}
                            </TableCell>
                            <TableCell align="right">{school.category.name}</TableCell>
                            <TableCell align="right">{school.price}</TableCell>
                            <TableCell align="right">{school.term}</TableCell>
                            <TableCell align="right">{school.location}</TableCell>
                            <TableCell align="right">{school.onlineOption ? 'Да' : 'Нет'}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleRemoveFromSpace(school)}>X</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Compare;