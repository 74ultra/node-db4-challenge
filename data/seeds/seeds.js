
exports.seed = function(knex) {
  return knex('receipes').truncate()
  .then(() => knex('ingredients').truncate())
  .then(() => knex('instructions').truncate())

  .then(() => {
    return knex('receipes').insert([
      { id: 1, name: 'grilled cheese' },
      { id: 2, name: 'roasted asparagus' },
    ])
  })

  .then(() => {
    return knex('ingredients').insert([
      { id: 1, name: 'bread', quantity: 2, unit: 'slice', notes: 'recommend whole wheat', receipe_id: 1 },
      { id: 2, name: 'cheese', quantity: 2, unit: 'slice', notes: 'recommend cheddar', receipe_id: 1 },
      { id: 3, name: 'butter', quantity: 1, unit: 'tbsp', notes: 'recommend salted', receipe_id: 1 },
      { id: 4, name: 'asparagus', quantity: 12, unit: 'spear', notes: 'medium sized', receipe_id: 2 },
      { id: 5, name: 'olive oil', quantity: 2, unit: 'tbsp', notes: 'none', receipe_id: 2 },
      { id: 6, name: 'salt', quantity: 2, unit: 'pinch', notes: 'none', receipe_id: 2 },
    ])
  })

  .then(() => {
    return knex('instructions').insert([
      { id: 1, step_number: 1, description: 'cover one slide of each slice of bread with butter', receipe_id: 1 },
      { id: 2, step_number: 2, description: 'place cheese between slices of bread (butter side out)', receipe_id: 1 },
      { id: 3, step_number: 3, description: 'cook in pan butter-side down until done', receipe_id: 1 },
      { id: 4, step_number: 1, description: 'trim asparagus spears', receipe_id: 2 },
      { id: 5, step_number: 2, description: 'cover asparagus with olive oil', receipe_id: 2 },
      { id: 6, step_number: 3, description: 'sprikle with salt', receipe_id: 2 },
      { id: 7, step_number: 4, description: 'cook in oven at 400 for 10 minutes', receipe_id: 2 }
    ])
  })

};
