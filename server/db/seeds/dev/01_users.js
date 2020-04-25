
exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return Promise.all([
        knex('users').insert([
          {
            id: 1,
            full_name: 'Default User',
            email: 'default@test.com',
            veteran: true,
            veteran_family: false,
            token: '1234',
            password_digest: 'abcd',
            role: 'default'
          },
          {
            id: 2,
            full_name: 'Admin User',
            email: 'admin@test.com',
            veteran: false,
            veteran_family: false,
            token: '5678',
            password_digest: 'abcd',
            role: 'admin'
          }
        ])
        .then(() => console.log('User seeding complete!'))
        .catch((error) => console.log(`Error seeding user data: ${error}`))
      ])
    })
    .catch((error) => console.log(`Error seeding user data: ${error}`));
};
