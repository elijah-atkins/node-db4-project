exports.seed = function (knex) {
  // Inserts seed entries
  return knex("ingredients").insert([
    { ingredient: "cup bottled steak sauce" },
    { ingredient: "cup bourbon whiskey" },
    { ingredient: "tablespoon honey" },
    { ingredient: "teaspoons prepared mustard" },
    { ingredient: "beef rib, round, or chuck steaks (10 ounces each)"},
    { ingredient: "pork shoulder roast" },
    { ingredient: "large onion; halved length-wise and thinely sliced"},
    { ingredient: "tablespoons Worcestershire sauce"},
    { ingredient: "water"},
    { ingredient: "bottle of favorite barbecue sauce"},
    { ingredient: "medium head lettuce, shredded"},
    { ingredient: "bell pepper chopped"},
    { ingredient: "stalks celery chopped"},
    { ingredient: "cups tomato chopped"},
    { ingredient: "cup cauliflower florets"},
    { ingredient: "cup mushrooms sliced"},
    { ingredient: "cup red onion rings"},
    { ingredient: "cup shredded sharp cheddar"},
    { ingredient: "sliced water chestnuts (optional)"}
  ]);
};
