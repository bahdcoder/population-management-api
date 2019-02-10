'use strict'

const Model = use('Model')

class Location extends Model {
  /**
   * Get all computed properties
   * 
   * @return {Array}
   */
  static get computed () {
    return ['total_count']
  }

  /**
   * Get the total number of residents in this location
   * 
   * @param {Object} model
   * 
   * @return {Integer} 
   */
  getTotalCount({ male_count, female_count }) {
    return male_count + female_count
  }
  /**
   * A location can have many sub locations
   * 
   * @return
   */
  locations () {
    return this.hasMany('App/Models/Location')
  }
}

module.exports = Location
