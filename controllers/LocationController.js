const { db } = require("../db")
const locations = db.locations
const { getBaseurl } = require("./helpers.js")
//Create
exports.createNew = (req, res) => {
    if (!req.body.brand || !req.body.model || !req.body.year || !req.body.origin) {
        return res.status(400).send({ Error: "one or more parameters are missing" })
    }
    const createdLocation = locations.create(req.body, {
        fields: ["city", "country"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/locations/${createdLocation.id}`)
        .json(createdLocation)
}

//Read
exports.getAll = async (req, res) => {
    const result = await locations.findAll({ attributes: ["id", "city", "country"] })
    res.send(JSON.stringify(result))
}
exports.getById = async (req, res) => {
    const foundLocation = await  locations.getById(req.params.id)
    if (foundLocation === null) {
        return res.status(404).send({ error: `Location not found` })
    }
    res.send(foundLocation)
}
// UPDATE
exports.editById = async (req, res) => {
    console.log("Update:", req.params, req.body);
    const updatedResult = await locations.update({ ...req.body }, {
        where: { id: req.params.id },
        fields: ["city", "country"]
    })
    if (updatedResult[0] == 0) {
        return res.status(404).send({ "error": "Location not found" })
    }
    res.status(204)
        .location(`${getBaseurl(req)}/locations/${req.params.id}`)
        .send()
}


// DELETE
exports.deleteById = async (req, res) => {
    const deleteAmount = await locations.destroy({
        where: { id: req.params.id }
    })
    if (deleteAmount) {
        return res.status(404).send({ error: "Location not found" })
    }
    res.status(204).send()
}