const express = require('express');
let router = express.Router();

const recipeController = require('../controllers/recipe.controller');

router.get('/recipe', recipeController.getAll);

router.post('/recipe', recipeController.new);

router.get('/recipe/:id', recipeController.getById);

router.get('/recipe/slug/:slug', recipeController.getBySlug);

router.put('/recipe/:id', recipeController.edit);

router.put('/recipe/times/:id', recipeController.updateTimes);

router.delete('/recipe/:id', recipeController.delete);

module.exports = router;