const router = require('express').Router();
const Recipe = require('./recipes-model');

router.get('/:recipe_id', async (req, res, next) => {
    try {
        const recipe = await Recipe.getRecipeById(req.params.recipe_id)
        res.status(200).json(recipe)
    } catch (err) {
        next(err)
    }
})

module.exports = router;
