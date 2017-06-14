import controller from '$js/Controller'

/**
 * Add item to cart
 * @param {Event} event Click event
 */
function addToCart(event) {
  const $elemRef = event.target
  const modelData = controller.model.get()
  const cart = modelData.cart || []

  cart.push($elemRef.dataset.id)
  controller.model.set('cart', cart, true)
}

/**
 * Add and update filters
 * @param {Event} event change event
 */
function addFilter(event) {
  const $elemRef     = event.target
  const modelData    = controller.model.get()
  const activeFilter = modelData.filters.active

  if ($elemRef.checked) {
    activeFilter.push($elemRef.dataset.id)
  } else {
    activeFilter.splice(activeFilter.indexOf($elemRef.dataset.id), 1)
  }

  const newFilter = Object.assign(modelData.filters, { active : activeFilter })

  controller.model.set('filters', newFilter)
}

/**
 * Add Events for Products page
 */
export function addEvents() {
  const products = document.getElementsByClassName('product-tile')
  const filters = document.getElementsByClassName('brand')

  for (let product = 0, length = products.length; product < length; product++) {
    products[product].addEventListener('click', addToCart)
  }

  for (let filter = 0, length = filters.length; filter < length; filter++) {
    filters[filter].addEventListener('change', addFilter)
  }
}
