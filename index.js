const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');
import { brands } from './brands/data';

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

res.send(brands)

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