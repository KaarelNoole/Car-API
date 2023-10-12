
const { db } = require("../db")
const Sellers = db.sellers
const { getBaseurl } = require("./helpers")

// CREATE
exports.createNew = async (req, res) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).send({ error: "One or all required parameters are missing" })
    }
    const createdSeller = await Sellers.create(req.body, {
        fields: ["id","name", "email","phone"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/games/${createdSeller.id}`)
        .json(createdSeller)
}
// READ
exports.getAll = async (req, res) => {
    const result = await Sellers.findAll({ attributes: ["id","name", "email","phone"] })
    res.json(result)
}
exports.getById = (req, res) => {
    const foundSeller = Sellers.getById(req.params.id)
    if (foundSeller === undefined) {
        return res.status(404).send({ error: `Seller not found` })
    }
    res.send(foundSeller)
}
// UPDATE
exports.editById = (req, res) => {

}
// DELETE
exports.deleteById = (req, res) => {
    if (Sellers.delete(req.params.id) === undefined) {
        return res.status(404).send({ error: "Seller not found" })
    }
    res.status(204).send()
}