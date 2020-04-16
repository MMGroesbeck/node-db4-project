const express = require('express');

const Ingredients = require('./ingredients-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Ingredients.getIngredients()
    .then(ingredients => {
        res.json(ingredients);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to get ingredients.' });
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Ingredients.getIngredientById(id)
    .then(ing => {
        res.json(ing);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to get ingredient.' });
    })
})

router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;
    Ingredients.getRecipesByIngredient(id)
    .then(rec => {
        res.json(rec);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to get recipes.' });
    })
})

module.exports = router;