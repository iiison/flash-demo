/**
 * Initial Setup for products by brand
 * @param  {Array} values  List of brands
 * @return {Object}        Inital object of productsByBrand
 */
function setupProductsByBrands(values) {
  return values.reduce((prev, curr) => {
    return {
      ...prev,
      [curr] : []
    }
  }, {})
}

/**
 * Format and setup `products`, `byBrand` state of model
 * @param  {Array} products  Product list
 * @param  {Array} filters   Filter list
 * @return {Object}          Formatted Products
 */
export default function productsFormatter(products, filters) {
  const allProducts = []
  const BRAND = 'brand'
  let productsByBrand = {}
  const productsMap = {}

  for (const filter in filters) {
    if (filters[filter].name === BRAND) {
      productsByBrand = setupProductsByBrands(filters[filter].values)
    }
  }

  for (const product in products) {
    allProducts.push(products[product].id)
    productsByBrand[products[product].brand].push(products[product].id)
    productsMap[product] = products[product]
  }

  return {
    productsMap,
    allProducts,
    productsByBrand
  }
}

