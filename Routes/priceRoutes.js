const PriceController  = require("../controllers/PriceController")
const Price = require("../models/Price")
module.exports = (app) => {
    app.route("/Prices")
    .get(PriceController.getAll)
    .post(PriceController.createNew) //Create
    app.route("/Prices/:id")
    .get(PriceController.getById) //Read
    .put(PriceController.editById) //Update
    .delete(PriceController.deleteById) //Delete 
}