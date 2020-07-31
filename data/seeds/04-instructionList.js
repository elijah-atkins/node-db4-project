exports.seed = function (knex) {
  // Inserts seed entries
  return knex("instruction_list").insert([
    { recipe_id: 1,step_no: 1, instruction: "Combine all the ingredients except the steaks in a baking dish or resealable plastic storage bag and mix well"},
    { recipe_id: 1,step_no: 2, instruction: "Add the steaks, cover (or seal) and refrigerate for 2 hours, or overnight. "},
    { recipe_id: 1,step_no: 3, instruction: "Preheat the grill to medium-high heat. "},
    { recipe_id: 1,step_no: 4, instruction: "Grill the steaks for 12 to 15 minutes, or until desired doneness, turning them over halfway through the grilling."},
    { recipe_id: 2,step_no: 1, instruction: "Place pork roast in crockpot. "},
    { recipe_id: 2,step_no: 2, instruction: "Add onion and worcestershire sauce."},
    { recipe_id: 2,step_no: 3, instruction: "Add water to cover."},
    { recipe_id: 2,step_no: 4, instruction: "Cover and cook on low for about 10 hours."},
    { recipe_id: 2,step_no: 5, instruction: "Remove roast, discarding cooking water. Save onions."},
    { recipe_id: 2,step_no: 6, instruction: "Shred pork and discard any fat and bones."},
    { recipe_id: 2,step_no: 7, instruction: "Return shredded meat and onions to crockpot. "},
    { recipe_id: 2,step_no: 8, instruction: "Dump a bottle of your favorite bbq sauce over it and cook an hour on low until heated thoroughly."},
    { recipe_id: 2,step_no: 9, instruction: "Serve alone or on bread slices or buns."},
    { recipe_id: 3,step_no: 1, instruction: "Layer in order given in container with a top that seals, "},
    { recipe_id: 3,step_no: 2, instruction: "cover with small bottle of blue cheese dressing chill overnight, "},
    { recipe_id: 3,step_no: 3, instruction: "before serving add 1/2 lb. bacon crumbled & 1/4 cup Parmesan cheese & toss.."},

   
  ]);
};