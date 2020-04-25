
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('tags', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable().unique();
      table.string('color').notNullable().unique();
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('tags')
  ])
};
