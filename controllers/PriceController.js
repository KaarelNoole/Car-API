const { db } = require("../db")
const prices = db.prices
const { getBaseurl } = require("./helpers.js")
//Create
exports.createNew = (req, res) => {
    if (!req.body.brand || !req.body.model || !req.body.year || !req.body.origin) {
        return res.status(400).send({ Error: "one or more parameters are missing" })
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
    const result = await cars.findAll({ attributes: ["id", "brand", "model", "year", "origin"] })
    res.send(JSON.stringify(result))
}
exports.getById = async (req, res) => {
    const foundCar = await  cars.getById(req.params.id)
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