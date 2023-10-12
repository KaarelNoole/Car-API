const brandsController = require(".../controllers/brandscontroller")
module.exports = (app) => {
    app.route("/brands")
        .get(brandsController.getAll())
        .post(brandsController.createNew) //Create
    app.route("/brands/:id")
        .get(brandsController.getById) //Read
        .put(brandsController.editById) //Update
        .delete(brandsController.deleteById) //Delete
}