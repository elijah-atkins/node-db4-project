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

  router.get("/:id", validateRecipesId, (req, res) => {
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
    validateRecipesId,
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
  
  router.delete("/:id", validateRecipesId, async (req, res, next) => {
    try {
      await db.remove(req.params.id);
      res.json({ message: "DELETED", Recipes: req.Recipes });
      res.json(deletedRecipes);
    } catch (error) {
      next(error);
    }
  });
  
  async function validateRecipesId(req, res, next) {
    try {
      const validRecipes = await db.getRecipes(req.params.id);
  
      if (validRecipes) {
        req.Recipes = validRecipes;
        next();
      } else {
        res.status(404).json({ error: "Recipes id could not be found." });
      }
    } catch (error) {
      next(error);
    }
  }

  function validateRecipesBody(req, res, next) {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ error: "Please provide a Recipes body" });
      //look for required fields 
    } else if (!req.body.recipe_name) {
      res.status(400).json({ error: "Please provide a unique recipe name"});
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