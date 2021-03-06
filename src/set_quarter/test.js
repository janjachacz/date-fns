// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var setQuarter = require('./')

describe('setQuarter', function () {
  it('sets the quarter of the year', function () {
    var result = setQuarter(new Date(2014, 6 /* Jul */, 2), 1)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('sets the last day of the month if the original date was the last day of a longer month', function () {
    var result = setQuarter(new Date(2014, 10 /* Nov */, 30), 1)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 28))
  })

  it('accepts a string', function () {
    var result = setQuarter(new Date(2014, 6 /* Jul */, 1).toISOString(), 4)
    assert.deepEqual(result, new Date(2014, 9 /* Oct */, 1))
  })

  it('accepts a timestamp', function () {
    var result = setQuarter(new Date(2014, 6 /* Jul */, 1).getTime(), 4)
    assert.deepEqual(result, new Date(2014, 9 /* Oct */, 1))
  })

  it('does not mutate the original date', function () {
    var date = new Date(2014, 6 /* Jul */, 1)
    setQuarter(date, 2)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 1))
  })
})
