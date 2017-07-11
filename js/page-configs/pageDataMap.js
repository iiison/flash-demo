import controller from '$js/Controller'

/**
 * Create and return a map for page name and data required
 * @param  {String} viewName  View name for which data is required.
 * @return {Object}          Data needed for that page
 */
export default function pageDataMap(viewName) {
  const modelData = controller.model.get()

  const map = {
    login() {
      return {
        userDetails : modelData.userDetails,
        homePage    : modelData.homePage
      }
    },
    products() {
      const products = modelData.productMap
      const byBrand = modelData.byBrands
      const activeFilters = modelData.filters.active
      let activeProducts = []

      if (activeFilters && activeFilters.length > 0) {
        for (const filter in activeFilters) {
          if (byBrand[activeFilters[filter]].length > 0) {
            activeProducts = activeProducts.concat(activeProducts, byBrand[activeFilters[filter]])
          }
        }
      } else {
        activeProducts = Object.keys(products)
      }

      activeProducts = activeProducts.reduce((prev, curr) => {
        return {
          ...prev,
          [curr] : products[curr]
        }
      }, {})

      return {
        activeProducts,
        byBrand        : modelData.byBrands,
        filters        : modelData.filters
      }
    },
    cart() {
      const cart = modelData.cart || []
      const products = modelData.productMap
      const activeProducts = cart.reduce((prev, curr) => {
        return {
          ...prev,
          [curr] : products[curr]
        }
      }, {})

      return {
        activeProducts
      }
    },
    product() {
      const id = modelData.product.id

      return modelData.productMap[id]
    }
  }

  return typeof map[viewName] === 'function' ? map[viewName]() : {}
}
