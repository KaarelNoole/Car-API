const { db } = require("../db")
const sellers = db.sellers
const { getBaseurl } = require("./helpers")

// CREATE
exports.createNew = async (req, res) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).send({ error: "One or all required parameters are missing" })
    }
    const createdSeller = await sellers.create(req.body, {
        fields: ["name", "email","phone"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/sellers/${createdSeller.id}`)
        .json(createdSeller)
}
// READ
exports.getAll = async (req, res) => {
    const result = await sellers.findAll({ attributes: ["id","name", "email","phone"] })
    res.json(result)
}
exports.getById = (req, res) => {
    const foundSeller = sellers.getById(req.params.id)
    if (foundSeller === undefined) {
        return res.status(404).send({ error: `Seller not found` })
    }
    res.send(foundSeller)
}
// UPDATE
exports.editById = async (req, res) => {
    const updatedResult = await sellers.update({ ...req.body}, {
        where: {id: req.params.id },
        fields: ["name", "email", "phone"]
    })
    if (updatedResult[0] == 0) {
        return res.status(404).send({error: "Seller not found"})
    }
    res.status(204)
        .location(`${getBaseurl(req)}/sellers/${req.params.id}`)
        .send()
}
// DELETE
exports.deleteById = async (req, res) => {
    const deleteAmount = await sellers.destroy({
        where: { id: req.params.id }
    })
    if (deleteAmount === 0) {
        return res.status(404).send({error: "Seller not found"})
    }
    res.status(204).send()
}