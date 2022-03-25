exports.seed = function (knex) {
    return knex('step_ingredients').insert([
        { quantity: '1 teaspoon', recipe_id: '1', step_id: '1', ingredient_id: '1'},
        { quantity: '1lb', recipe_id: '1', step_id: '2', ingredient_id: '2'},
        { quantity: '1 cup', recipe_id: '1', step_id: '3', ingredient_id: '3'},
        { quantity: '6', recipe_id: '1', step_id: '4', ingredient_id: '4'},
        { quantity: '5 cups', recipe_id: '2', step_id: '1', ingredient_id: '5'},
        { quantity: '1lb', recipe_id: '2', step_id: '2', ingredient_id: '6'},
        { quantity: '2 cups', recipe_id: '2', step_id: '3', ingredient_id: '7'},
        { quantity: '1lb', recipe_id: '3', step_id: '1', ingredient_id: '2'},
        { quantity: '15oz can', recipe_id: '3', step_id: '1', ingredient_id: '8'},
        { quantity: '10oz can', recipe_id: '3', step_id: '1', ingredient_id: '9'},
        { quantity: '2tbsp', recipe_id: '3', step_id: '4', ingredient_id: '7'},
        { quantity: '2tbsp', recipe_id: '3', step_id: '4', ingredient_id: '10'}
    ])
}