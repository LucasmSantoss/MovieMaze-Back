import Movie from "../models/Movie";
import axios from "axios";

const controller = {
  create: async (req, res, next) => {
    try {
      const { movieId } = req.body;

      // Realizar solicitud a la API de IMDb para obtener los detalles de la película
      const response = await axios.get(`https://api.imdb.com/movies/${movieId}`);

      // Obtener los datos de la película de la respuesta de la API
      const movieData = response.data;

      // Crear una instancia del modelo Movie con los datos de la película
      const movie = new Movie({
        title: movieData.title,
        releaseYear: movieData.releaseYear,
        // Ajusta los campos y valores según la estructura de tu modelo Movie
      });

      // Guardar la película en la base de datos
      await movie.save();

      return res.status(200).json({
        success: true,
        message: "Movie added to favorites",
      });
    } catch (error) {
      next(error);
    }
  },
};

export default controller;
