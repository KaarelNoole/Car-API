const { db } = require("../db")
const brands = db.brands
const {getBaseur1} = require("./helpers.js")
//Create
exports.createNew = (req,res) => {
    if (!req.body.seller || !req.body.origin) {
        return res.status(404).send ({Error:"one or more parameters are missing"})
    }
    const createdBrand =  brands.create(req.body,{
        fields:["brands", "origin"]
    })
    res.status(201)
    .location(`${getBaseurl(req)}/brands/${createdBrand.id}`)
    .json(createdBrand)
}

//Read
exports.getAll = async (req, res) => {
    const result = await brands.findAll({ attributes: ["id", "brand"] })
    res.send(JSON.stringify(result))
}
exports.getById = async (req, res) => {
    const foundBrand = await brands.getById(req.params.id)
    if (foundBrand === null) {
        return res.status(404).send({ error: `Brand not found` })
    }
    res.send(foundBrand)
}
// UPDATE
exports.editById = async (req, res) => {
    console.log("Update:", req.params, req.body);
const updatedResult = await brands.update({...req.body}, {
    where: {id: req.params.id},
    fields: ["brand", "origin"]
})
if (updatedResult[0] == 0) {
    return res.status(404).send({ "error": "brand not found"})
}
res.status(204)
.location(`${getBaseurl(req)}/brands/${req.params.id}`)
.send()
}


// DELETE
exports.deleteById = async (req, res) => {
    const deleteAmount = await brands.destroy({
        where: {id: req.params.id}
    })
    if (deleteAmount) {
        return res.status(404).send({ error: "Brand not found"})
    } 
    res.status(204).send()
}