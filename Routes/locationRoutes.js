const locationController = require("./controllers/LocationController")
module.exports = (app) => {
    app.route("/locations")
        .get(locationController.getAll)
        .post(locationController.createNew) //Create
    app.route("/locations/:id")
        .get(locationController.getById) //Read
        .put(locationController.editById) //Update
        .delete(locationController.deleteById) //Delete
}