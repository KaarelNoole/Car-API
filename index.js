const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');
const models = require("./models/data")

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

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

app.post("/models", (req, res) => {
    if (!reg.body.name || !reg.body.color) {
        return res.status(400).send({error: "One or all parameter are missing"})
    }
   const createdModel =  models.create({
        name:req.body.name,
        color:req.body.color
    })
    res.status(201)
    .location(`${getBaseurl(req)}/models/${createdModel.id}`)
    .send/createdModel
})

function getBaseurl(request){
    return (request.conncetion && request.conncetion.encrypted ? "https": "http")
     + "://" +request.headers.host
}

app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})