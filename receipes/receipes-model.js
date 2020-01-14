const db = require('../data/db.js');

function getReceipes(){
    return db('receipes')
}

function getIngredients(receipe_id){
    return db('ingredients AS in')
        .select('in.id AS ingredient_id', 'in.name', 'in.quantity', 'in.notes', 'receipes.name AS receipe_name', 'receipes.id AS receipe_id')
        .join('receipes', 'in.receipe_id', 'receipes.id')
        .where('in.receipe_id', receipe_id)
}

function getInstructions(receipe_id){
    return db('instructions AS ins')
        .select('ins.id', 'rec.name AS receipe_name', 'ins.step_number', 'ins.description', 'ins.receipe_id')
        .join('receipes AS rec', 'ins.receipe_id', 'rec.id')
        .where('ins.receipe_id', receipe_id)
}

module.exports = {
    getReceipes,
    getIngredients,
    getInstructions
}