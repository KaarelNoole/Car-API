const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');
const sellers = require("./Sellers/data")

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