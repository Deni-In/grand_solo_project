const School = require("../models/School.model");

module.exports.schoolsController = {
  getAll: async (req, res) => {
    try {
      const schools = await School.find().populate('category');

      return res.json(schools);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getSchoolById: async (req, res) => {
    const { id } = req.params;

    try {
      const school = await School.findById(id).populate('category');

      if (!school) {
        return res.status(404).json({
          error: "Школа с таким ID не найдена",
        });
      }

      return res.json(school);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getSchoolByCategory: async (req, res) => {
    const { categoryId } = req.params;

    try {
      const schools = await School.find({ category: categoryId }).populate(
        "category",
        "name"
      );

      if (!schools) {
        return res.status(404).json({
          error: "В данной категории нет курсов",
        });
      }

      return res.json(schools);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  createSchool: async (req, res) => {
    const {
      name,
      category,
      logo,
      rating,
      onlineOption,
      price,
      description,
      location,
      term,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "Необходимо указать название школы!",
      });
    }

    if (!category) {
      return res.status(400).json({
        error: "Необходимо указать ID категории!",
      });
    }

    if (!logo) {
      return res.status(400).json({
        error: "Необходимо ссылку на лого!",
      });
    }

    if (!rating) {
      return res.status(400).json({
        error: "Необходимо указать рейтинг!",
      });
    }

    if (onlineOption === null) {
      return res.status(400).json({
        error: "Необходимо указать опцию!",
      });
    }

    if (!price) {
      return res.status(400).json({
        error: "Необходимо указать цену!",
      });
    }

    if (!description) {
      return res.status(400).json({
        error: "Необходимо указать описание!",
      });
    }

    if (!location) {
      return res.status(400).json({
        error: "Необходимо указать город!",
      });
    }

    try {
      const school = School.create({
        name,
        category,
        logo,
        rating,
        onlineOption,
        price,
        description,
        location,
        term,
      });

      return res.json(school);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  removeSchool: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await School.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: "Не удалось удалить школу, введите правильный ID",
        });
      }

      return res.json({
        message: "Школа успешно удалена",
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  editSchool: async (req, res) => {
    const { id } = req.params;
    const {
      name,
      category,
      logo,
      rating,
      onlineOption,
      price,
      description,
      location,
      term,
    } = req.body;

    try {
      const edited = await School.findByIdAndUpdate(id, {
        name,
        category,
        logo,
        rating,
        onlineOption,
        price,
        description,
        location,
        term,
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
