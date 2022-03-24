exports.seed = function (knex) {
    return knex('steps').insert([
        {
            step_number: '1',
            step_instructions: 'Heat oil in a large skillet over medium heat.',
            recipe_id: '1',
        },
        {
            step_number: '2',
            step_instructions: 'Once hot add ground meat, stirring occasionally until no pink remains, about 8 minutes.',
            recipe_id: '1',
        },
        {
            step_number: '3',
            step_instructions: 'Add in salsa and mix to combine, let cook until heated through, about 3 minutes.',
            recipe_id: '1',
        },
        {
            step_number: '4',
            step_instructions: 'Crack in 6 eggs and cover skillet until cooked through to desired consistency, about 5-8 minutes.',
            recipe_id: '1',
        },
        {
            step_number: '1',
            step_instructions: 'In a large pot, bring the milk to a boil.',
            recipe_id: '2',
        },
        {
            step_number: '2',
            step_instructions: 'Add the pasta and stir constantly until the pasta is cooked, about 10 minutes.',
            recipe_id: '2',
        },
        {
            step_number: '3',
            step_instructions: 'Turn off the heat, then add the cheddar. Stir until the cheese is melted and the pasta is evenly coated.',
            recipe_id: '2',
        },
        {
            step_number: '1',
            step_instructions: 'Mix the meat, beans and tomatoes together in large pot.',
            recipe_id: '3',
        },
        {
            step_number: '2',
            step_instructions: 'Bring it to a boil over medium heat.',
            recipe_id: '3',
        },
        {
            step_number: '3',
            step_instructions: 'Bring heat to medium low and allow to simmer for about 30 minutes.',
            recipe_id: '3',
        },
        {
            step_number: '4',
            step_instructions: 'Salt and pepper to taste. Enjoy with your favorite toppings such as cheese and sour cream.',
            recipe_id: '3',
        },
    ])
}