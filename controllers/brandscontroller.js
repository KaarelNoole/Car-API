const brand = require(".../brands/data")
const {getBaseur1} = require("./helpers.js")
//Create
exports.createNew = (req,res) => {
    if (!req.body.seller || !req.body.origin) {
        return res.status(404).send ({Error:"one or more parameters are missing"})
    }
    const createdBrand =  brands.create({
        Brand:req.body.Brand,
        origin:req.body.origin
    })
    res.status(201)
    .location(`${getBaseurl(req)}/brands/${createdBrand.id}`)
}

//Read
app.get("/brands", (req,res) => {
    res.send(brands.getAll())
})

app.get("/brands/:id", (req,res) => {
    const foundThing = brands.getById(req.params.id)
    if (foundThing === undefined) {
        res.status(404).send({
            error: "brand not found"
        })
    }
    res.send(foundThing)
})

//Delete
app.delete("/brands/:id", (req, res) => {
    if (brands.delete(req.params.id)=== undefined ) {
        return res.status(404).send({error: "Brand not found"})
    }
    res.status(204).send()
})