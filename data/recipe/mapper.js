module.exports = {
    intToBoolean,
    booleanToint,
    recipeToBody
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function recipeToBody(recipe) {
    const result = {
      ...recipe,
    };
    return result;
  }
