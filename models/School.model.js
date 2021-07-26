const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true
    },
    onlineOption: {
      type: Boolean,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);
