const { db } = require("../db")
const cars = db.cars
const { getBaseurl } = require("./helpers.js")
//Create
exports.createNew = async (req, res) => {
    if (!req.body.brand || !req.body.model || !req.body.year || !req.body.origin) {
        return res.status(400).send({ error: "one or more parameters are missing" })
    }
    const createdCar = await cars.create(req.body, {
        fields: ["brand", "model", "year", "origin"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/cars/${createdCar.id}`)
        .json(createdCar)
}

//Read
exports.getAll = async (req, res) => {
    const result = await cars.findAll({ attributes: ["id","brand","model", "year", "origin"] })
    res.json(result)
}
exports.getById = async (req, res) => {
    const foundCar = await cars.findByPk(req.params.id)
    if (foundCar === null) {
        return res.status(404).send({ error: `Car not found` })
    }
    res.json(foundCar)
}
// UPDATE
exports.editById = async (req, res) => {
    const updatedResult = await cars.update({ ...req.body }, {
        where: { id: req.params.id },
        fields: ["brand", "model", "year", "origin"]
    })
    if (updatedResult[0] == 0) {
        return res.status(404).send({ error: "Car not found" })
    }
    res.status(204)
        .location(`${getBaseurl(req)}/cars/${req.params.id}`)
        .send()
}


// DELETE
exports.deleteById = async (req, res) => {
    const deleteAmount = await cars.destroy({
        where: { id: req.params.id }
    })
    if (deleteAmount === 0) {
        return res.status(404).send({ error: "Car not found" })
    }
    res.status(204).send()
}