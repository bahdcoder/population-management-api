'use strict'

const Factory = use('Factory')
const Location = use('App/Models/Location')
const { test, trait, before } = use('Test/Suite')('Population')

trait('Test/ApiClient')

let location

before(async () => {
  location = await Factory.model('App/Models/Location').make()
})

test('can store population data for a location', async ({ assert, client }) => {
  const response = await client.post('locations').send({
    name: location.name,
    male_count: location.male_count,
    female_count: location.female_count
  }).end()

  response.assertStatus(201)

  const savedLocation = await Location.findOrFail(response.body.id)
  response.assertJSONSubset({
    name: location.name,
    male_count: location.male_count,
    female_count: location.female_count
  })
  assert.equal(savedLocation.name, location.name)
})

test('can get data for all locations', async ({ assert, client }) => {
  const response = await client.get('locations').end()

  response.assertStatus(200)
  assert.equal(response.body.length, 1)
})

test('can update data for a location', async ({ assert, client }) => {
  let savedLocation = await Location.firstOrFail()
  const response = await client.put(`locations/${savedLocation.id}`).send({
    male_count: 25,
    female_count: 25
  }).end()

  response.assertStatus(200)
  response.assertJSONSubset({
    name: location.name,
    male_count: 25,
    female_count: 25
  })

  savedLocation = await Location.firstOrFail()

  assert.equal(savedLocation.male_count, 25)
  assert.equal(savedLocation.female_count, 25)
})

test('can delete a location', async ({ assert, client }) => {
  let savedLocation = await Location.firstOrFail()
  const response = await client.delete(`locations/${savedLocation.id}`).end()

  response.assertStatus(200)

  savedLocation = await Location.find(savedLocation.id)

  assert.isNull(savedLocation)
})
