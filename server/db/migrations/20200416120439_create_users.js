
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('full_name').notNullable();
      table.string('email').notNullable().unique();
      table.boolean('veteran').notNullable().defaultTo(false);
      table.boolean('veteran_family').notNullable().defaultTo(false);
      table.string('token').notNullable();
      table.string('password_digest').notNullable();
      table.enu('role', ['default', 'admin']).notNullable().defaultTo('default');
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
