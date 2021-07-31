import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editSchool, selectEditingSchool } from '../redux/features/schools';
import {
  Button, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core';

function EditSchoolDialog({ setSchoolOpen, schoolOpen }) {
  const dispatch = useDispatch()

  const editingSchool = useSelector(selectEditingSchool)

  const [name, setName] = useState(editingSchool.name)

  const [category, setCategory] = useState(editingSchool.category)

  const [logo, setLogo] = useState(editingSchool.logo)

  const [rating, setRating] = useState(editingSchool.rating)

  const [onlineOption, setOnlineOption] = useState(editingSchool.onlineOption)

  const [price, setPrice] = useState(editingSchool.price)

  const [description, setDescription] = useState(editingSchool.description)

  const [location, setLocation] = useState(editingSchool.location)

  const [term, setTerm] = useState(editingSchool.term)

  const handleClose = (id) => {
    dispatch(editSchool(id, {
      name: name,
      category: category,
      logo: logo,
      rating: rating,
      onlineOption: onlineOption,
      price: price,
      description: description,
      location: location,
      term: term
    }))
    setSchoolOpen(false)
  }

  const handleEditNameSchool = (e) => {
    dispatch({ type: 'set/patch/name', payload: e.target.value})
  }

  const handleEditCategorySchool = (e) => {
    setCategory(e.target.value)
  }

  const handleEditLogoSchool = (e) => {
    setLogo(e.target.value)
  }

  const handleEditRatingSchool = (e) => {
    setRating(e.target.value)
  }

  const handleEditOnlineOptionSchool = (e) => {
    setOnlineOption(e.target.value)
  }

  const handleEditPriceSchool = (e) => {
    setPrice(e.target.value)
  }

  const handleEditDescriptionSchool = (e) => {
    setDescription(e.target.value)
  }

  const handleEditLocationSchool = (e) => {
    setLocation(e.target.value)
  }

  const handleEditTermSchool = (e) => {
    setTerm(e.target.value)
  }

  return (
    <Dialog open={schoolOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Изменение</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Введите изменения в нужные поля
        </DialogContentText>
        <TextField
          value={editingSchool.name}
          margin="dense"
          label="Название"
          type="text"
          onChange={handleEditNameSchool}
        />
        <TextField
          value={editingSchool.category}
          margin="dense"
          label="Категория"
          type="text"
          onChange={handleEditCategorySchool}
        />
        <TextField
          value={editingSchool.logo}
          margin="dense"
          label="Ссылка лого"
          type="text"
          onChange={handleEditLogoSchool}
        />
        <TextField
          value={editingSchool.rating}
          margin="dense"
          label="Рейтинг"
          type="text"
          onChange={handleEditRatingSchool}
        />
        <TextField
          value={editingSchool.onlineOption}
          margin="dense"
          label="Онлайн true/false"
          type="text"
          onChange={handleEditOnlineOptionSchool}
        />
        <TextField
          value={editingSchool.price}
          margin="dense"
          label="Цена"
          type="text"
          onChange={handleEditPriceSchool}
        />
        <TextField
          value={editingSchool.description}
          margin="dense"
          label="Описание"
          type="text"
          onChange={handleEditDescriptionSchool}
        />
        <TextField
          value={editingSchool.location}
          margin="dense"
          label="Город"
          type="text"
          onChange={handleEditLocationSchool}
        />
        <TextField
          value={editingSchool.term}
          margin="dense"
          label="Месяцев"
          type="text"
          onChange={handleEditTermSchool}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Отмена
        </Button>
        <Button onClick={() => handleClose(editingSchool._id)} color="primary">
          Сохранить изменения
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditSchoolDialog;