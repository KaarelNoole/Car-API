const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const brands = require("./brands/data")

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

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
    function getBaseurl(request){
        return (request.conncetion && request.conncetion.encrypted ? "https": "http")
         + "://" +request.headers.host
    }

app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})