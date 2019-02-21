// what changes are applied to database
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cohorts", function(tbl) {
      // primary key called id, integer, autoincrement
      tbl.increments();

      tbl.string('name', 128)
      .notNullable()
      .unique();
  })
};

// how to undo database changes
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("cohorts");
};
