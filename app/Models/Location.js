'use strict'

const Model = use('Model')

class Location extends Model {

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
