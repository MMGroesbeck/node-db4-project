const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to get recipes.' });
    })
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    Recipes.getInstructions(id)
    .then(inst => {
        res.json(inst);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to get instructions.' });
    })
})

module.exports = router;