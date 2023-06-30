const express = require('express');
const router = express.Router();


import favs from '../controllers/favs/create.js'

const { all } = favs;

// Ruta para obtener todos los favoritos
router.get('/', all.getAllFavorites);

// Ruta para agregar una película a favoritos
router.post('/', all.addFavorite);

// Ruta para eliminar una película de favoritos
router.delete('/:id', all.deleteFavorite);


export default router