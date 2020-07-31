const express = require("express");
const db = require("./model.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allRecipes = await db.getRecipes();
    res.json(allRecipes);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/shopping_list", async (req, res, next) => {
  try {
    const allRecipes = await db.getShoppingList(req.params.id);
    res.json(allRecipes);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res) => {
  res.json(req.Recipes);
});

router.post("/", validateRecipesBody, async (req, res, next) => {
  try {
    const newRecipes = await db.insert(req.body);
    res.json(newRecipes);
  } catch (error) {
    next(error);
  }
});

router.put(
  "/:id",
  validateRecipesBody,
  async (req, res, next) => {
    try {
      const newRecipes = await db.update(req.params.id, req.body);
      res.json(newRecipes);
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", async (req, res, next) => {
  try {
    await db.remove(req.params.id);
    res.json({ message: "DELETED", Recipes: req.Recipes });
    res.json(deletedRecipes);
  } catch (error) {
    next(error);
  }
});

function validateRecipesBody(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ error: "Please provide a Recipes body" });
    //look for required fields
  } else if (!req.body.recipe_name) {
    res.status(400).json({ error: "Please provide a unique recipe name" });
  } else {
    next();
  }
}

//   function RecipesIdMatchesParams(req, res, next) {
//     if (req.body.Recipes_id === req.params.id) {
//       next();
//     } else {
//       res.status(400).json({ error: "Recipes id must match params." });
//     }
//   }

module.exports = router;
