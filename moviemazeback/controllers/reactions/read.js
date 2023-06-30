import axios from "axios";
import Reaction from '../../models/Reaction.js';

const controller = {
    read: async (req, res, next) => {
        try {
            let order = { title: 1 };
            if (req.query.order == 1 || req.query.order == -1) {
                order.title = req.query.order;
            }

            let pagination = { page: 1, limit: 6 };
            if (req.query.page) {
                pagination.page = Number(req.query.page);
            }

            let skip = pagination.page > 1 ? (pagination.page - 1) * pagination.limit : 0;

            if (req.query.id && !req.query.me) {
                const movieId = req.query.id;

                // Obtener la cantidad de reacciones por nombre y id
                console.log('Movie ID:', movieId);
                const likes = await Reaction.countDocuments({ name: 'like', id });
                const dislikes = await Reaction.countDocuments({ name: 'dislike', id });
                const surprises = await Reaction.countDocuments({ name: 'surprise', id });
                const loves = await Reaction.countDocuments({ name: 'love', id });

                return res.status(200).json({
                    success: true,
                    message: {
                        likes,
                        dislikes,
                        surprises,
                        loves
                    }
                });
            }

            if (req.query.id && req.query.me) {
                const movieId = req.query.id;
                const userId = req.user._id;

                // Obtener las reacciones del usuario actual para un movie_id específico
                console.log('Movie ID:', movieId);
                console.log('User ID:', userId);
                const reactions = await Reaction.find({ id, user_id: userId });

                return res.status(200).json({
                    success: true,
                    message: reactions
                });
            }

            if (req.query.name) {
                const userId = req.user._id;
                const reactionName = req.query.name;

                // Obtener las reacciones del usuario actual por nombre
                console.log('User ID:', userId);
                console.log('Reaction Name:', reactionName);
                const reactions = await Reaction.find({ user_id: userId, name: reactionName })
                    .select("movie_id -_id");

                const favoriteMovies = reactions.map(reaction => reaction.id);

                let moviesQuery = {
                    _id: { $in: favoriteMovies }
                };

                if (req.query.category) {
                    moviesQuery.category_id = req.query.category.split(',');
                    pagination.limit = 10;
                }

                // Obtener las películas favoritas del usuario actual
                console.log('Movie ID:', req.query.id);
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${req.query.id}`, {
                    params: {
                        api_key: "9e0856ae02dd1e042f13b81f15fb6661"
                    }
                });

                const movieData = response.data;
                const movie = {
                    poster_path: movieData.poster_path,
                    adult: movieData.adult,
                    overview: movieData.overview,
                    release_date: movieData.release_date,
                    genre_ids: movieData.genre_ids,
                    id: movieData.id,
                    original_title: movieData.original_title,
                    original_language: movieData.original_language,
                    title: movieData.title,
                    backdrop_path: movieData.backdrop_path,
                    popularity: movieData.popularity,
                    vote_count: movieData.vote_count,
                    video: movieData.video,
                    vote_average: movieData.vote_average
                };

                return res.status(200).json({
                    success: true,
                    message: movie
                });
            }
        } catch (error) {
            next(error);
        }
    }
};

export default controller;
