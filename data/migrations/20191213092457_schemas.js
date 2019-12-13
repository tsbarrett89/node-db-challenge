
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments('id');
      tbl.string('name').notNullable();
      tbl.string('description');
      tbl.boolean('complete').defaultTo(false);
  })

  .createTable('resources', tbl => {
      tbl.increments('id');
      tbl.string('name').notNullable();
      tbl.string('description');
  })

  .createTable('tasks', tbl => {
      tbl.increments('id');
      tbl.string('description').notNullable();
      tbl.string('notes');
      tbl.boolean('complete').defaultTo(false);
      tbl.integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT') 
      .onUpdate('CASCADE');
  })

  .createTable('project_resources', tbl => {
      tbl.increments();
      tbl.integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
            .dropTableIfExists('project_resources')
            .dropTableIfExists('tasks')
            .dropTableIfExists('resources')
            .dropTableIfExists('projects')
};
