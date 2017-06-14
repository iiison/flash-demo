import Base from '$lib/Base'
import View from '$js/View'
import Model from '$models/Model'
import initRoutes from '$js/routes'
import * as pageConfigs from '$pageConfs'

import { getTemplate } from '$utils'

import loading from '../templates/loading.tpl'


/**
 * Main Class, instentiates View and Model
 */
class Controller extends Base {
  /**
   * Controller Class Contructor,
   * Initializes View, Model and Routes
   */
  constructor() {
    super()

    this.view = View.create()
    this.model = Model.create(Model.handleDataChange)

    this.view.on('change:viewName', (viewName) => {
      getTemplate(viewName, this).then(() => {
        this.view.render(loading)
        pageConfigs[viewName].setupPageData()
      })
    })
  }

  /**
   * Static Class member, just call `create` method to
   * instantiate the class
   * @return {Controller}  instance of controller class
   */
  static create() {
    return new Controller()
  }
}

const controller = Controller.create()

initRoutes(controller)


export default controller
