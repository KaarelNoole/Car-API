const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');
const brands = require("./cars/data")

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.get("/cars", (req,res) => {
    res.send(brands.getAll())
})

app.get("/cars/:id", (req,res) => {
    res.send(brands.getById(req.params.id))
})


app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})