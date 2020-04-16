const db = require("../data/db-config.js");

module.exports = {
    getIngredients,
    getIngredientById,
    getRecipesByIngredient
}

function getIngredients() {
    return db("ingredients");
}

function getIngredientById(id) {
    return db("ingredients")
        .where({ id: id });
}

function getRecipesByIngredient(id) {
    return db("recipes as r")
    .join("steps as st", "st.recipe_id", "r.id")
    .join("ingredients_steps as is", "is.step_id", "st.id")
    .where({ ingredient_id: id })
}