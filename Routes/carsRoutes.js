const Carscontroller = require("../controllers/Carscontroller")
module.exports = (app) => {
    app.route("/Cars")
        .get(Carscontroller.getAll)
        .post(Carscontroller.createNew) //Create
    app.route("/Cars/:id")
        .get(Carscontroller.getById) //Read
        .put(Carscontroller.editById) //Update
        .delete(Carscontroller.deleteById) //Delete
}