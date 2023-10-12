const sellersController = require("../controllers/sellersController")
module.exports = (app) => {
    app.route("/sellers")
        .get(sellersController.getAll)
        .post(sellersController.createNew) //Create
    app.route("/sellers/:id")
        .get(sellersController.getById)   //Read
        .put(sellersController.editById)  //Update
        .delete(sellersController.deleteById) //Delete
}