import controller from '$js/Controller'

/**
 * Get DummyData
 * @return {Promise} User data promise
 */
/*
function dummyFunction() {
  // Generate modal from flash-generator or write one by yourself
  return new Promise;
}
*/


/**
 * Setup login page data, call user data for the first time
 */
function setupPageData() {
  const cart = controller.model.get('cart') || []

  controller.model.set('cart', cart)
}

const cart = {
  setupPageData
}

export default cart

