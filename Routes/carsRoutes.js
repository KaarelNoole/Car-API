<<<<<<< HEAD
const CarsController = require(".../controllers/CarsController.js")
module.exports = (app) => {
    app.route("/Cars")
        .get(CarsController.getAll)
        .post(CarsController.createNew) //Create
    app.route("/Cars/:id")
        .get(CarsController.getById) //Read
        .put(CarsController.editById) //Update
        .delete(CarsController.deleteById) //Delete
=======
const Carscontroller = require("../controllers/Carscontroller")
module.exports = (app) => {
    app.route("/Cars")
        .get(Carscontroller.getAll)
        .post(Carscontroller.createNew) //Create
    app.route("/Cars/:id")
        .get(Carscontroller.getById) //Read
        .put(Carscontroller.editById) //Update
        .delete(Carscontroller.deleteById) //Delete
>>>>>>> 81bd236b44fd6d85d6f6c06b284e03ae4ab0ce15
}