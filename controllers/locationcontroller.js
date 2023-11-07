const { db } = require("../db")
const locations = db.locations
const { getBaseurl } = require("./helpers.js")
//Create
exports.createNew = async (req, res) => {
    if (!req.body.city || !req.body.country) {
        return res.status(400).send({ error: "one or more parameters are missing" })
    }
    const createdlocation = await locations.create(req.body, {
        fields: ["city", "country"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/locations/${createdlocation.id}`)
        .json(createdlocation)
}

//Read
exports.getAll = async (req, res) => {
    const result = await locations.findAll({ attributes: ["id","city","country"] })
    res.json(result)
}
exports.getById = async (req, res) => {
    const foundLocation = await locations.findByPk(req.params.id)
    if (foundLocation === null) {
        return res.status(404).send({ error: `Location not found` })
    }
    res.json(foundLocation)
}
// UPDATE
exports.editById = async (req, res) => {
    const updatedResult = await locations.update({ ...req.body }, {
        where: { id: req.params.id },
        fields: ["city", "country"]
    })
    if (updatedResult[0] == 0) {
        return res.status(404).send({ error: "Location not found" })
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
    if (deleteAmount === 0) {
        return res.status(404).send({ error: "Location not found" })
    }
    res.status(204).send()
}