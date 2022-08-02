const GamesRoutes = require('express').Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteElement } = require('./games.controller');

    GamesRoutes.get('/', getAll)
    GamesRoutes.get('/:id', getById)
    GamesRoutes.post('/', create)
    GamesRoutes.patch('/:id', update)
    GamesRoutes.delete('/:id', deleteElement)
    
    module.exports = GamesRoutes