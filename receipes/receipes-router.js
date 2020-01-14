const express = require('express');

const Receipes = require('./receipes-model.js');

const router = express.Router({
    mergeParams: true
})

router.get('/', (req, res) => {
    Receipes.getReceipes()
        .then(receipes => {
            res.status(200).json(receipes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: `There was an error retrieving receipes`})
        })
})

router.get('/:id/ingredients', (req, res) => {
    
    const { id } = req.params;
    Receipes.getIngredients(id)
        .then(ing => {
            res.status(200).json(ing)
        })
        
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    Receipes.getInstructions(id)
        .then(ins => {
            res.status(200).json(ins)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: `There was an error: ${err}`})
        })
})


module.exports = router;