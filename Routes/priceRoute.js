const pricecontroller = require("../controllers/pricecontroller")
module.exports = (app) => {
    app.route("/prices")
        .get(pricecontroller.getAll)
        .post(pricecontroller.createNew) //Create
    app.route("/prices/:id")
        .get(pricecontroller.getById)   //Read
        .put(pricecontroller.editById)  //Update
        .delete(pricecontroller.deleteById) //Delete
}