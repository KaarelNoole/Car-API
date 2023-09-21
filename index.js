const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');

const sellers = [
    {id: 1, name:"Martin",Email:"martinhobesalu@gmail.com",Phone: "56785234"},
    {id: 2, name:"Kaarel", Email: "kaarelnoole@gmail.com", Phone:"7563567"}
]

app.get('/Sellers/:id', (req, res) => {
    const seller = sellers.find(s => s.id === parseInt(req.params.id))
    if (!seller) {
       return(res.status(404).send("Seller with given id was not found"))
    }
    res.send(seller)
})
app.get('/Sellers', (req, res) => {
    res.send(sellers)
})
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})