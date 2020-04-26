
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('video_tags', function(table) {
      table.increments('id').primary();
      table.integer('video_id').unsigned().notNullable();
      table.foreign('video_id').references('videos.id');
      table.integer('tag_id').unsigned().notNullable();
      table.foreign('tag_id').references('tags.id');
      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('video_tags')
  ])
};
