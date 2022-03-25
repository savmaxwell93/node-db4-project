const db = require('../../data/db-config');

// SELECT 
//     recipes.recipe_id,
//     recipes.recipe_name,
//     recipes.created_at,
//     steps.step_id,
//     steps.step_number,
//     steps.step_instructions,
//     ingredients.ingredient_id,
//     ingredients.ingredient_name,
//     step_ingredients.quantity 
// FROM recipes
// LEFT JOIN step_ingredients ON recipes.recipe_id = step_ingredients.recipe_id
// LEFT JOIN steps ON step_ingredients.step_id = steps.step_id
// LEFT JOIN ingredients ON ingredients.ingredient_id = step_ingredients.ingredient_id
// ORDER BY recipes.recipe_id

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
        .where('recipe_id', recipe_id)

    return recipeRows
}

module.exports = { getRecipeById }
