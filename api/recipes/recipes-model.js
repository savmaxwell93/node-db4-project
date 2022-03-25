const db = require('../../data/db-config');

// SELECT 
//     recipes.*
//     steps.step_id,
//     steps.step_number,
//     steps.step_instructions,
//     ingredients.*,
//     step_ingredients.quantity 
// FROM recipes
// LEFT JOIN step_ingredients ON recipes.recipe_id = step_ingredients.recipe_id
// LEFT JOIN steps ON step_ingredients.step_id = steps.step_id
// LEFT JOIN ingredients ON ingredients.ingredient_id = step_ingredients.ingredient_id
// ORDER BY recipes.recipe_id

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
        .leftJoin('step_ingredients as si', 'r.recipe_id', 'si.recipe_id')
        .leftJoin('steps as st', 'si.step_id', 'st.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .select('r.*', 'st.step_id', 'st.step_number', 'st.step_instructions', 'i.*', 'si.quantity')
        .where('r.recipe_id', recipe_id)
        .orderBy('r.recipe_id')

    return recipeRows
}

module.exports = { getRecipeById }
