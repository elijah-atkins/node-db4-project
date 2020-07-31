exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name", 128).notNullable().unique();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient", 128);
    })
    .createTable("instruction_list", (tbl) => {
    tbl.unique(["recipe_id", "step_no"]).primary();
      tbl.integer("step_no", 128).notNullable();
      tbl.string("instruction", 256).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("shopping_list", (tbl) => {
      tbl.unique(["recipe_id", "ingredient_id"]).primary();
      tbl.float("quantity");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("shopping_list")
    .dropTableIfExists("instruction_list")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
