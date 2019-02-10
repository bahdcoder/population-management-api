'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Location', (faker) => {
  return {
    name: faker.username(),
    male_count: faker.integer({ min: 1000, max: 50000 }),
    female_count: faker.integer({ min: 1000, max: 50000 })
  }
})
