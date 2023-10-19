const CarsSellercontroller = require("../controllers/CarsSellercontroller.js")
module.exports = (app) => {
app.route("/CarSeller")
    .get(CarsSellercontroller.getAll)
    .post(CarsSellercontroller.createNew)  // Create
app.route("/CarSeller/:id")
    .get(CarsSellercontroller.getById)    // Read
    .put(CarsSellercontroller.editById)   // Update
    .delete(CarsSellercontroller.deleteById)  // Delete
}