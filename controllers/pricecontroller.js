const { db } = require("../db")
const prices = db.prices
const { getBaseurl } = require("./helpers.js")
//Create
exports.createNew = async (req, res) => {
    if (!req.body.amount || !req.body.currency) {
        return res.status(400).send({ error: "one or more parameters are missing" })
    }
    const createdprice = await prices.create(req.body, {
        fields: ["amount", "currency"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/prices/${createdprice.id}`)
        .json(createdprice)
}

//Read
exports.getAll = async (req, res) => {
    const result = await prices.findAll({ attributes: ["id","amount","currency"] })
    res.json(result)
}
exports.getById = async (req, res) => {
    const foundPrice = await prices.findByPk(req.params.id)
    if (foundPrice === null) {
        return res.status(404).send({ error: `Price not found` })
    }
    res.json(foundPrice)
}
// UPDATE
exports.editById = async (req, res) => {
    const updatedResult = await prices.update({ ...req.body }, {
        where: { id: req.params.id },
        fields: ["amount", "currency"]
    })
    if (updatedResult[0] == 0) {
        return res.status(404).send({ error: "Price not found" })
    }
    res.status(204)
        .location(`${getBaseurl(req)}/prices/${req.params.id}`)
        .send()
}


// DELETE
exports.deleteById = async (req, res) => {
    const deleteAmount = await prices.destroy({
        where: { id: req.params.id }
    })
    if (deleteAmount === 0) {
        return res.status(404).send({ error: "Price not found" })
    }
    res.status(204).send()
}