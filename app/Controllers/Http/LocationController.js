'use strict'

const Location = use('App/Models/Location')

/**
 * Resourceful controller for interacting with locations
 */
class LocationController {
  /**
   * Show a list of all locations.
   * GET locations
   */
  async index ({ response }) {
    const locations = await Location.query().with('locations').fetch()

    return response.ok(locations)
  }

  /**
   * Create/save a new location.
   * POST locations
   */
  async store ({ request, response }) {
    const location = await Location.create(request.only(['name', 'male_count', 'female_count', 'location_id']))

    return response.created(location)
  }

  /**
   * Update location details.
   * PUT or PATCH locations/:id
   */
  async update ({ params, request, response }) {
    const location = await Location.findOrFail(params.id)

    location.name = request.input('name') || location.name
    location.male_count = request.input('male_count') || location.male_count
    location.female_count = request.input('female_count') || location.female_count
    
    await location.save()

    return response.ok(location)
  }

  /**
   * Delete a location with id.
   * DELETE locations/:id
   */
  async destroy ({ params, response }) {
    const location = await Location.findOrFail(params.id)

    await location.delete()
    return response.ok()
  }
}

module.exports = LocationController
