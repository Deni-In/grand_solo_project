import React, { useState } from 'react';
import {
  Button, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { editCategory, selectEditingCategory } from '../redux/features/categories';

function EditCategoryDialog({ setOpen, open }) {
  const dispatch = useDispatch()

  const handleClose = (id) => {
    dispatch(editCategory(id, {name}))
    setOpen(false)
  }

  const handleEditNameCategory = (e) => {
    setName(e.target.value)
  }

  const editingCategory = useSelector(selectEditingCategory)

  const [name, setName] = useState(editingCategory.name)

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Изменение</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Введите изменения в нужные поля
        </DialogContentText>
        <TextField
          autoFocus
          value={name}
          margin="dense"
          id="name"
          label="Название категории"
          type="email"
          onChange={handleEditNameCategory}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Отмена
        </Button>
        <Button onClick={() => handleClose(editingCategory._id)} color="primary">
          Сохранить изменения
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditCategoryDialog;