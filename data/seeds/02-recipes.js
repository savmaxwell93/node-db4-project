exports.seed = function (knex) {
    return knex('recipes').insert([
        { recipe_name: 'Breakfast Skillet' },
        { recipe_name: 'Mac & Cheese' },
        { recipe_name: 'Chili' },
    ])
}