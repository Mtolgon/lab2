import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  // TODO: Include routes for restaurant described in the lab session README
  
  
app.route('/path/:userType')
                  .get(RestaurantController.index)
                  .post(RestaurantController.create)
                  .get(RestaurantController/{restaurantId}.show)
                  .put(RestaurantController/{restaurantId}.update)
                  .DELETE(RestaurantController/{restaurantId}.destroy)

                  
}
export default loadFileRoutes
