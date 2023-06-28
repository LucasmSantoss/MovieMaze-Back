import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },
  // Otros campos de la película que desees incluir
});

export const Movie = mongoose.model("Movie", movieSchema);


