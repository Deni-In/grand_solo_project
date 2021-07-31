import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCategory, selectEditingCategory } from '../redux/features/categories';
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
    setName(e.target.value)
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
          autoFocus
          value={name}
          margin="dense"
          id="name"
          label="Название"
          type="email"
          onChange={handleEditNameSchool}
        />
        <TextField
          autoFocus
          value={category}
          margin="dense"
          id="name"
          label="Категория"
          type="email"
          onChange={handleEditCategorySchool}
        />
        <TextField
          autoFocus
          value={logo}
          margin="dense"
          id="name"
          label="Ссылка лого"
          type="email"
          onChange={handleEditLogoSchool}
        />
        <TextField
          autoFocus
          value={rating}
          margin="dense"
          id="name"
          label="Рейтинг"
          type="email"
          onChange={handleEditRatingSchool}
        />
        <TextField
          autoFocus
          value={onlineOption}
          margin="dense"
          id="name"
          label="Онлайн true/false"
          type="email"
          onChange={handleEditOnlineOptionSchool}
        />
        <TextField
          autoFocus
          value={price}
          margin="dense"
          id="name"
          label="Цена"
          type="email"
          onChange={handleEditPriceSchool}
        />
        <TextField
          autoFocus
          value={description}
          margin="dense"
          id="name"
          label="Описание"
          type="email"
          onChange={handleEditDescriptionSchool}
        />
        <TextField
          autoFocus
          value={location}
          margin="dense"
          id="name"
          label="Город"
          type="email"
          onChange={handleEditLocationSchool}
        />
        <TextField
          autoFocus
          value={term}
          margin="dense"
          id="name"
          label="Месяцев"
          type="email"
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