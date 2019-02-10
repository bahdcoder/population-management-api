'use strict'

class AddLocationData {
  get rules () {
    return {
      name: 'required|unique:locations',
      male_count: 'required|integer',
      female_count: 'required|integer'
    }
  }
}

module.exports = AddLocationData
