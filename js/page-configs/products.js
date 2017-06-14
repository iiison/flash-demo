import controller from '$js/Controller'
import productsFormatter from '$js/formatters/products'

/**
 * Get all users
 * @return {Promise} User data promise
 */
function getProducts() {
  return controller
    .model
    .emit('GET_PRODUCTS')
    .then((data) => data)
    .catch((error) => {
      throw error
    })
}

/**
 * Get filters
 * @return {Promise} User data promise
 */
function getFilters() {
  return controller
    .model
    .emit('GET_FILTERS')
    .then((data) => data)
    .catch((error) => {
      throw error
    })
}

/**
 * Setup login page data, call user data for the first time
 * @return {[type]} [description]
 */
function setupPageData() {
  const modelData = controller.model.get()

  if (modelData.filters && modelData.byBrands) {
    return controller.model.set('dummy', '')
  }

  return Promise.all([getProducts(), getFilters()])
    .then((response) => {
      const filters   = {}
      const formattedProducts = productsFormatter(response[0].data, response[1].data)

      filters.all = response[1].data
      filters.active = []

      controller.model.set(null, {
        ...modelData,
        filters,
        activeProducts : formattedProducts.allProducts,
        byBrands       : formattedProducts.productsByBrand,
        productMap     : formattedProducts.productsMap
      })
    })
}

const products = {
  setupPageData
}

export default products
