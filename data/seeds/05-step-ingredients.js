exports.seed = function (knex) {
    return knex('step_ingredients').insert([
        { quantity: '1 teaspoon', step_id: '1', ingredient_id: '1'},
        { quantity: '1lb', step_id: '2', ingredient_id: '2'},
        { quantity: '1 cup', step_id: '3', ingredient_id: '3'},
        { quantity: '6', step_id: '4', ingredient_id: '4'},
        { quantity: '5 cups', step_id: '1', ingredient_id: '5'},
        { quantity: '1lb', step_id: '2', ingredient_id: '6'},
        { quantity: '2 cups', step_id: '3', ingredient_id: '7'},
        { quantity: '1lb', step_id: '1', ingredient_id: '2'},
        { quantity: '15oz can', step_id: '1', ingredient_id: '8'},
        { quantity: '10oz can', step_id: '1', ingredient_id: '9'},
        { quantity: '2tbsp', step_id: '4', ingredient_id: '7'},
        { quantity: '2tbsp', step_id: '4', ingredient_id: '10'}
    ])
}