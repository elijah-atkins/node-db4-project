exports.seed = function (knex) {
  // Inserts seed entries
  return knex("shopping_list").insert([
    { recipe_id: 1,ingredient_id: 1, quantity: .5},
    { recipe_id: 1,ingredient_id: 2, quantity: .25},
    { recipe_id: 1,ingredient_id: 3, quantity: 1},
    { recipe_id: 1,ingredient_id: 4, quantity: 2},
    { recipe_id: 1,ingredient_id: 5, quantity: 4},
    { recipe_id: 2,ingredient_id: 6, quantity: null},
    { recipe_id: 2,ingredient_id: 7, quantity: 1},
    { recipe_id: 2,ingredient_id: 8, quantity: 2},
    { recipe_id: 2,ingredient_id: 9, quantity: null},
    { recipe_id: 2,ingredient_id: 10, quantity: 1},
    { recipe_id: 3,ingredient_id: 11, quantity: 1},
    { recipe_id: 3,ingredient_id: 12, quantity: 1},
    { recipe_id: 3,ingredient_id: 13, quantity: 2},
    { recipe_id: 3,ingredient_id: 14, quantity: 2},
    { recipe_id: 3,ingredient_id: 15, quantity: 1},
    { recipe_id: 3,ingredient_id: 16, quantity: 1},
    { recipe_id: 3,ingredient_id: 17, quantity: .25},
    { recipe_id: 3,ingredient_id: 18, quantity: null},
  ]);
};
