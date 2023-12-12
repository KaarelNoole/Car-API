const { db } = require("../db")
const CarsSeller = db.CarsSeller
const {getBaseur1} = require("./helpers.js")
//Create
exports.createNew = (req,res) => {
    if (!req.body.brand || !req.body.model || !req.body.year || !req.body.origin || !req.body.name  || !req.body.email || !req.body.phone) {
        return res.status(404).send ({Error:"one or more parameters are missing"})
    }
    const createdCar =  CarsSeller.create(req.body,{
        fields:["brand","model","year","origin", "name", "email", "phone"]
    })
    res.status(201)
    .location(`${getBaseurl(req)}/carsseller/${createdCar.id}`)
    .json(createdCar)
}

//Read
exports.getAll = async (req, res) => {
    const result = await CarsSeller.findAll({
         include: [db.cars, db.seller]
    })
    res.json(result)
}
exports.getById = async (req, res) => {
    const foundCar = await CarsSeller.getById(req.params.id)
    if (foundCar === null) {
        return res.status(404).send({ error: `Car not found` })
    }
    res.send(foundCar)
}
// UPDATE
exports.editById = async (req, res) => {
const updatedResult = await CarsSeller.update({...req.body}, {
    where: {id: req.params.id},
    fields:["brand","model","year","origin", "name", "email", "phone"]
})
if (updatedResult[0] == 0) {
    return res.status(404).send({ "error": "Car not found"})
}
res.status(204)
.location(`${getBaseurl(req)}/carsseller/${req.params.id}`)
.send()
}


// DELETE
exports.deleteById = async (req, res) => {
    const deleteAmount = await CarsSeller.destroy({
        where: {id: req.params.id}
    })
    if (deleteAmount) {
        return res.status(404).send({ error: "Car not found"})
    } 
    res.status(204).send()
}