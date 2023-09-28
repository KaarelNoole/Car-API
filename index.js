const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');
const brands = require("./cars/data")

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.get("/cars", (req,res) => {
    res.send(brands.getAll())
})

app.get("/models", (req,res) => {
    res.send(models.getAll())
})

app.get("/models", (req,res) => {
    const foundThing = models.getById(req.params.id)
    if (foundThing === undefined) {
        res.status(404).send({
            error: "model not found"
        })
    }
})
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


app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})