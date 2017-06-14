import Handlebars from 'handlebars'

/**
 * Helper to add `onclick` to the templates
 * @param  {Function} fn  function to be escaped
 * @param  {Object}   ref reference to bind the other instance
 * @return {[type]}       stringified function
 */
export default function (fn) {
  return new Handlebars.SafeString(`(${fn.toString().replace(/"/g, '\'')})()`)
}
