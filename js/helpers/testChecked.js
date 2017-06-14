/**
 * Helper to check/uncheck the filter
 * @param  {String}   value    value to be tested
 * @param  {Array}    activeObj  Array of active filters
 * @param  {Object}   options  reference to bind the other instance
 * @return {Boolean}           checked true/false
 */
export default function (value, activeObj, options) {
  if (activeObj.indexOf(value) >= 0) {
    return options.fn(this)
  }

  return options.inverse(this)
}
