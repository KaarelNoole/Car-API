const CarsController = require(".../controllers/CarsController.js")
module.exports = (app) => {
    app.route("/Cars")
        .get(CarsController.getAll)
        .post(CarsController.createNew) //Create
    app.route("/Cars/:id")
        .get(CarsController.getById) //Read
        .put(CarsController.editById) //Update
        .delete(CarsController.deleteById) //Delete
}