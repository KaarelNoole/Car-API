const CarsController = require(".../controllers/CarsController")
module.exports = (app) => {
    app.route("/cars")
        .get(CarsController.getAll)
        .post(CarsController.createNew) //Create
    app.route("/cars/:id")
        .get(CarsController.getById) //Read
        .put(CarsController.editById) //Update
        .delete(CarsController.deleteById) //Delete
}