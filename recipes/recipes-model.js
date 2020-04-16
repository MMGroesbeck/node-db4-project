const db = require("../data/db-config.js");

module.exports = {
    getRecipes,
    getInstructions,
    getShoppingList
}

function getRecipes() {
    return db("recipes");
}

function getInstructions(recipe_id) {
    return db("steps")
        .where({ recipe_id: recipe_id })
        .orderBy("steps.step_number");
}

function getShoppingList(recipe_id) {
    return db
        .select(
            "ing.ingredient_name",
            "is.quantity"
        )
        .from("ingredients_steps as is")
        .join("ingredients as ing", "ing.id", "is.ingredient_id")
        .join("steps as st", "st.id", "is.step_id")
        .where({ recipe_id: id })
        .orderBy("st.step_number");
}