
exports.up = function(knex) {
  return knex.schema
    .createTable('receipes', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
    })

    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.float('quantity').notNullable();
        tbl.string('unit').notNullable();
        tbl.string('notes').defaultTo('none');
        tbl.integer('receipe_id').notNullable();
    })

    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.integer('step_number').notNullable();
        tbl.string('description').notNullable();
        tbl.integer('receipe_id').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('receipes')
};
