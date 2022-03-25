exports.seed = function (knex) {
    return knex('ingredients').insert([
        {
            ingredient_name: 'Vegetable Oil',
        },
        {
            ingredient_name: 'Ground Beef',
        },
        {
            ingredient_name: 'Salsa',
        },
        {
            ingredient_name: 'Eggs',
        },
        {
            ingredient_name: 'Milk',
        },
        {
            ingredient_name: 'Elbow Macaroni',
        },
        {
            ingredient_name: 'Shredded Cheddar Cheese',
        },
        {
            ingredient_name: 'Chili Beans',
        },
        {
            ingredient_name: 'Diced Tomatoes',
        },
        {
            ingredient_name: 'Sour Cream',
        },
    ])
}