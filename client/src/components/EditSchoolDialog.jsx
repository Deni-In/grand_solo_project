import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeEditingDialog,
  editSchool,
  selectEditingSchool,
  setFormFields
} from "../redux/features/schools";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";

function EditSchoolDialog() {
  const dispatch = useDispatch();

  const editingSchool = useSelector(selectEditingSchool);

  const handleClose = () => {
    dispatch(closeEditingDialog());
  };

  const handleEdit = (e) => {
    dispatch(setFormFields(e))
  };

  const handleSave = () => {
    dispatch(editSchool());
  }

  if(!editingSchool) {
    return null;
  }

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Изменение</DialogTitle>
      <DialogContent>
        <DialogContentText>Введите изменения в нужные поля</DialogContentText>
        <TextField
          margin="dense"
          label="Название"
          type="text"
          onChange={handleEdit}
          value={editingSchool.name}
          name="name"
        />
        <TextField
          margin="dense"
          label="Категория"
          type="text"
          onChange={handleEdit}
          value={editingSchool.category?._id}
          name="category"
        />
        <TextField
          margin="dense"
          label="Ссылка лого"
          type="text"
          onChange={handleEdit}
          value={editingSchool.logo}
          name="logo"

        />
        <TextField
          margin="dense"
          label="Рейтинг"
          type="text"
          onChange={handleEdit}
          value={editingSchool.rating}
          name="rating"

        />
        <TextField
          margin="dense"
          label="Онлайн true/false"
          type="text"
          onChange={handleEdit}
          value={editingSchool.onlineOption}
          name="onlineOption"

        />
        <TextField
          margin="dense"
          label="Цена"
          type="text"
          onChange={handleEdit}
          value={editingSchool.price}
          name="price"

        />
        <TextField
          margin="dense"
          label="Описание"
          type="text"
          onChange={handleEdit}
          value={editingSchool.description}
          name="description"

        />
        <TextField
          margin="dense"
          label="Город"
          type="text"
          onChange={handleEdit}
          value={editingSchool.location}
          name="location"

        />
        <TextField
          margin="dense"
          label="Месяцев"
          type="text"
          onChange={handleEdit}
          value={editingSchool.term}
          name="term"
         />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Отмена
        </Button>
        <Button onClick={handleSave} color="primary">
          Сохранить изменения
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditSchoolDialog;
