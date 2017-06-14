import { get } from '$utils'

/**
 * Get products list
 * @return {Promise}  XHR Promise
 */
function getProducts() {
  return get('/products')
}

/**
 * get filters for the products page
 * @return {Promise} XHR Promise
 */
function getFilters() {
  return get('/filters')
}

/**
 * Get single product from the list
 * @param  {String} id  Product id
 * @return {Promise}    XHR Promise
 */
function getSingleProduct(id) {
  return get(`/products/${id}`)
}

export default {
  getProducts,
  getFilters,
  getSingleProduct
}
