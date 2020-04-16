
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_steps').insert([
        {
          step_id: 1,
          ingredient_id: 1,
          quantity: "2 Tbsp"
        },
        {
          step_id: 1,
          ingredient_id: 2,
          quantity: "1.5 Tbsp"
        },
        {
          step_id: 2,
          ingredient_id: 3,
          quantity: "1.5 cups"
        },
        {
          step_id: 2,
          ingredient_id: 4,
          quantity: "1/2 cup"
        }
      ]);
    });
};
