exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("id");
      tbl.text("recipe_name", 128).unique().notNullable();
      tbl.text("description", 255);
    })
    .createTable("steps", (tbl) => {
      tbl.increments("id");
      tbl.text("step_name", 128).unique().notNullable();
      tbl.text("step_directions");
      tbl.integer("step_number").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("id");
      tbl.text("ingredient_name", 128).unique().notNullable();
    })
    .createTable("ingredients_steps", (tbl) => {
      tbl.increments("id");
      tbl.text("quantity", 255);
      tbl
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("steps")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredients_steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
