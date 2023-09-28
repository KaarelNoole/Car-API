const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');
const sellers = require("./Sellers/data")
const locations = require("./Locations")

app.get("/Sellers",(req,res)=>{
    res.send(sellers.getAll())
})

app.get("/Sellers/:id",(req,res)=>{
    res.send(sellers.getById(req.params.id))
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
res.send(brands)


app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})

app.get("/Locations",(req,res)=>{
    res.send(locations.getAll())
})

app.get("/Locations/:id",(req,res)=>{
    res.send(locations.getById(req.params.id))
    if (foundThing === undefined) return res.status(404).send({error: 'location not found'})
    res.send(foundThing)
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
res.send(locations)

app.post("/Sellers", (req,res) => {
    if (!req.body.seller || !req.body.origin) {
        return res.status(404).send ({Error:"one or more parameters are missing"})
    }
    const createdSeller = sellers.create({
        seller:req.body.seller,
        Name:req.body.Name,
        Email:req.body.Email,
        Phone:req.body.Phone
    })
    res.status(201)
    .location(`${getBaseur1(req)}/Sellers/${createdSeller.id}`)
})

function getBaseur1(request){
    return(request.connection && request.connection.encrypted ? "https": "http")
    + "://" +request.header.host
}