const router = require('express').Router();
const Recipe = require('./recipes-model');

router.get('/:id', async (req, res, next) => {
    try {
        res.status(200).json('get recipe by id')
    } catch (err) {
        next(err)
    }
})

module.exports = router;
