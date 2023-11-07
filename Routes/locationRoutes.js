const locationcontroller = require("../controllers/locationcontroller")
module.exports = (app) => {
    app.route("/locations")
        .get(locationcontroller.getAll)
        .post(locationcontroller.createNew) //Create
    app.route("/locations/:id")
        .get(locationcontroller.getById)   //Read
        .put(locationcontroller.editById)  //Update
        .delete(locationcontroller.deleteById) //Delete
}