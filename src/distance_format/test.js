// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var distanceInWords = require('./')

describe('distanceFormat', function () {

  it('accepts strings', function () {
    var result = distanceInWords(
      new Date(1986, 3, 4, 10, 32, 0).toISOString(),
      new Date(1986, 3, 4, 11, 32, 0).toISOString()
    )
    assert(result === 'about 1 hour')
  })

  it('accepts timestamps', function () {
    var result = distanceInWords(
      new Date(1986, 3, 4, 10, 32, 0).getTime(),
      new Date(1986, 3, 4, 11, 32, 0).getTime()
    )
    assert(result === 'about 1 hour')
  })
})
