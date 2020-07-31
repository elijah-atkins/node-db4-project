const db = require("../../dbConfig");
const mappers = require("./mapper");

module.exports = {
    getRecipes,
    insert,
    update,
    remove,
    getShoppingList,
    getInstructions
};

function getRecipes(id) {
  let query = db('recipes');

  if (id) {
    return query
      .where('id', id)
      .first()
      .then((recipe) => {
        if (recipe) {
          return mappers.recipeToBody(recipe);
        } else {
          return null;
        }
      });
  } else {
    return query.then((recipes) => {
      return recipes.map((recipe) => mappers.recipeToBody(recipe));
    });
  }
}
  

  function insert(recipe) {
    return db("recipes")
      .insert(recipe, "id")
      .then(([id]) => get(id));
  }

  function update(id, changes) {
    return db("recipes")
      .where("id", id)
      .update(changes)
      .then(count => (count > 0 ? get(id) : null));
  }
  
  function remove(id) {
    return db("recipes")
      .where("id", id)
      .del();
  }

  function getShoppingList(id){
    return db("ingredients as i")
        .join('shopping_list as sl', 'sl.ingredient_id', 'i.id')
        .select('sl.quantity', 'i.ingredient')
        .where({recipe_id: id})
  }
  function getInstructions(id){
    return db("instruction_list as i")
        .join('recipes as r', 'r.id', 'i.recipe_id')
        .select('i.step_no', 'i.instruction')
        .where({recipe_id: id})
  }