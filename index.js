const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

const cars = [
    {id: 1, Brand: 'Ford', model: 'Ford focus', year: 2016, origin: 'Germany'},
    {id: 2, Brand: 'Tesla', model: 'Model S', year: 2016, origin: 'USA'},
    {id: 3, Brand: 'Toyota', model: 'Yaris', year: 2020, origin: 'Japan'}
]

app.get('/cars/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) {
        res.status(404).send("Car with given id was not found")
        return
    }
    res.send(car)
})

app.get('/cars',(req,res) => {
    res.send(cars)
})

app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})