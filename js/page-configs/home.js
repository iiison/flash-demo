import controller from '$js/Controller'

/**
 * Get all users
 * @return {Promise} User data promise
 */
function getUsers() {
  return controller
    .model
    .emit('GET_ALL_USERS')
    .then((data) => data)
    .catch((error) => {
      throw error
    })
}

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
 * Setup login page data, call user data for the first time
 * @return {[type]} [description]
 */
function setupPageData() {
  return Promise.all([getUsers(), getProducts()])
    .then((response) => {
      const modelData = controller.model.get()

      modelData.homePage = response[0].data.data
      modelData.products = response[1].data

      controller.model.set(modelData)

      console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
      console.log(controller.model.get())
      console.log('%c <><><><><><><><><><><><><><><>', 'color: green, font-weight: bold')
    })
}

const home = {
  setupPageData
}

export default home
