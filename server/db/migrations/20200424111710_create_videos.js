
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('videos', function(table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.string('thumbnail').notNullable();
      table.string('youtube_id').notNullable();
      table.enu('type', ['teaching', 'practice']).notNullable();
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('videos')
  ])
};
