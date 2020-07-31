exports.seed = function (knex) {
  // Inserts seed entries
  return knex("recipes").insert([
    { recipe_name: "Bourbon Steak" },
    { recipe_name: "Easy BBQ Pork" },
    { recipe_name: "Seven Layer Salad" },
  ]);
};
