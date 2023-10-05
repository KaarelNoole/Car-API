const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');
const brands = require("./cars/data")

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.get("/prices", (res,req) => {
    res.send(prices.getAll())
})

app.get("/prices", (res,req) => {
    const foundThing = prices.getById(req.params.id)
    if (foundThing === undefined) {
        res.status(404).send({
            error:"price not found"
        })
    }
})

app.post("/prices", (req, res) => {
    if (!reg.body.amount || !reg.body.currency) {
        return res.status(400).send({error: "One or all parameter are missing"})
    }
   const createdPrice =  prices.create({
        amount:req.body.amount,
        currency:req.body.currency
    })
    res.status(201)
    .location(`${getBaseurl(req)}/prices/${createdPrice.id}`)
    .send/createdPrice
})

function getBaseurl(request){
    return (request.conncetion && request.conncetion.encrypted ? "https": "http")
     + "://" +request.headers.host
}

app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})