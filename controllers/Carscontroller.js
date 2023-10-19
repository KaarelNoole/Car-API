const { db } = require("../db")
const cars = db.cars
const { getBaseurl } = require("./helpers.js")
//Create
exports.createNew = (req, res) => {
    if (!req.body.seller || !req.body.origin) {
        return res.status(404).send({ Error: "one or more parameters are missing" })
    }
    const createdCar = cars.create(req.body, {
        fields: ["brand", "model", "year", "origin"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/Cars/${createdCar.id}`)
        .json(createdCar)
}

//Read
exports.getAll = async (req, res) => {
    const result = await brands.findAll({ attributes: ["id", "brand"] })
    res.send(JSON.stringify(result))
}
exports.getById = async (req, res) => {
    const foundCar = await brands.getById(req.params.id)
    if (foundCar === null) {
        return res.status(404).send({ error: `Car not found` })
    }
    res.send(foundCar)
}
// UPDATE
exports.editById = async (req, res) => {
    console.log("Update:", req.params, req.body);
    const updatedResult = await Cars.update({ ...req.body }, {
        where: { id: req.params.id },
        fields: ["brand", "model", "year", "origin"]
    })
    if (updatedResult[0] == 0) {
        return res.status(404).send({ "error": "Car not found" })
    }
    res.status(204)
        .location(`${getBaseurl(req)}/Cars/${req.params.id}`)
        .send()
}


// DELETE
exports.deleteById = async (req, res) => {
    const deleteAmount = await Cars.destroy({
        where: { id: req.params.id }
    })
    if (deleteAmount) {
        return res.status(404).send({ error: "Car not found" })
    }
    res.status(204).send()
}