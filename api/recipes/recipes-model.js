const db = require('../../data/db-config');

// SELECT 
//     recipes.*,
//     steps.step_id,
//     steps.step_number,
//     steps.step_instructions,
//     ingredients.*,
//     step_ingredients.quantity 
// FROM recipes
// LEFT JOIN step_ingredients ON recipes.recipe_id = step_ingredients.recipe_id
// LEFT JOIN steps ON recipes.recipe_id = steps.recipe_id
// LEFT JOIN ingredients ON ingredients.ingredient_id = step_ingredients.ingredient_id
// WHERE recipes.recipe_id = 2
// ORDER BY recipes.recipe_id

// SELECT 
//      recipes.*,
//      steps.step_id,
//      steps.step_number,
//      steps.step_instructions,
//      ingredients.*,
//      step_ingredients.quantity 
//  FROM recipes
//  LEFT JOIN steps ON recipes.recipe_id = steps.recipe_id
//  LEFT JOIN step_ingredients ON steps.recipe_id = step_ingredients.recipe_id AND step_ingredients.step_id = steps.step_id
//  LEFT JOIN ingredients ON ingredients.ingredient_id = step_ingredients.ingredient_id
//  WHERE recipes.recipe_id = 2

async function getRecipeById(recipe_id) {
    const recipeRows = await db('recipes as r')
        .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
        .leftJoin('step_ingredients as si', 'r.recipe_id', 'si.recipe_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .select('r.*', 'st.step_id', 'st.step_number', 'st.step_instructions', 'i.*', 'si.quantity')
        .where('r.recipe_id', recipe_id)
        .orderBy('r.recipe_id')

        const result = {
           recipe_id: recipeRows[0].recipe_id,
           recipe_name: recipeRows[0].recipe_name,
           created_at: recipeRows[0].created_at,
           steps: [],
        }

        recipeRows.forEach((row) => {
            if (row.step_id) {
                result.steps[row.step_number - 1] = {
                    step_id: row.step_id,
                    step_number: row.step_number,
                    step_instructions: row.step_instructions,
                    ingredients: [],
                }
            }
        })

        // recipeRows.forEach((row) => {
        //     if (row.ingredient_id) {
        //         if (!result.steps[row.step_number - 1].ingredients) {
        //             result.steps[row.step_number - 1].ingredients = [];
        //         }
        //         result.steps[row.step_number - 1].ingredients.push({
        //             ingredient_id: row.ingredient_id,
        //             ingredient_name: row.ingredient_name,
        //             quantity: row.quantity
        //         })
        //     }
        // })

    return result
}

module.exports = { getRecipeById }
