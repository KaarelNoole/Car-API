const express = require('express')
const app = express()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml');
const { Sequelize } = require('sequelize');
const { error } = require('console')
const sequelize = new Sequelize(process.env.DATABASE,process.env.DB_USER,process.env.PASS, {
    host: process.env.DB_HOST ,
    dialect: "mariadb"
})

try {
    sequelize.authenticate().then(() => {
        console.log('Connetion has been established successfully.')
    });
}catch (error) {
    console.error('Unable to connect to the database', error);
}
app.use(express.json())
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
        brands.create({
            brands:req.body.brands,
            origin:req.body.origin
        })
        res.end()
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
//MartinJaKaarel - parool