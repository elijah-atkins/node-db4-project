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

  }
  function getInstructions(id){
      
  }