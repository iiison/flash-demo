import controller from '$js/Controller'

/**
 * Get all users
 * @param {String} id  product id
 * @return {Promise} User data promise
 */
function getProduct(id) {
  return controller
    .model
    .emit('GET_PRODUCT', id)
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

  return Promise.all([getProduct(controller.model.get('product').id)])
    .then((response) => {
      const productMap = modelData.productMap || {}

      response[0].data.id = modelData.product.id
      productMap[modelData.product.id] = response[0].data
      controller.model.set('productMap', productMap)
    })
}

const product = {
  setupPageData
}

export default product

