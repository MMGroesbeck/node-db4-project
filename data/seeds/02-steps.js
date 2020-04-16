
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_name: "Make Roux",
          step_directions: "Whisk together butter and flour in a saucepan over medium-low heat; cook until blonde.",
          recipe_id: 1,
          step_number: 1
        },
        {
          step_name: "Mix Liquids",
          step_directions: "Mix together chicken stock and white wine at room temperature.",
          recipe_id: 1,
          step_number: 2
        },
        {
          step_name: "Add Liquids",
          step_directions: "Add stock/wine mixture to roux in a thin stream, whisking constantly until incorporated.",
          recipe_id: 1,
          step_number: 3
        },
        {
          step_name: "Simmer until thickened.",
          recipe_id: 1,
          step_number: 4
        }
      ]);
    });
};
