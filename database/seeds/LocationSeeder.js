'use strict'

/*
|--------------------------------------------------------------------------
| LocationSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class LocationSeeder {
  async run () {
    await Factory.model('App/Models/Location').createMany(10)
  }
}

module.exports = LocationSeeder
