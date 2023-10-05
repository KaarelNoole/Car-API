const express = require('express')
const app = express()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml');
const brands = require("./brands/data")

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

//Create
    app.post("/brands", (req, res) => {
        if (!reg.body.Brand || !reg.body.origin) {
            return res.status(400).send({error: "One or all parameter are missing"})
        }
       const createdBrand =  brands.create({
            Brand:req.body.Brand,
            origin:req.body.origin
        })
        res.status(201)
        .location(`${getBaseurl(req)}/brands/${createdBrand.id}`)
        .send/createdBrand
    })

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

//Update


//Delete
    app.delete("/brands/:id", (req, res) => {
        if (brands.delete(req.params.id)=== undefined ) {
            return res.status(404).send({error: "Brand not found"})
        }
        res.status(204).send()
    })

    function getBaseurl(request){
        return (request.conncetion && request.conncetion.encrypted ? "https": "http")
         + "://" +request.headers.host
    }

app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})