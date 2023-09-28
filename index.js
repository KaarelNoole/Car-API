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