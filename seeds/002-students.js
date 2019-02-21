
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {cohort_id: 1, name: 'Michael'},
        {cohort_id: 2, name: 'Angel'},
        {cohort_id: 3, name: 'Josh'}
      ]);
    });
};
