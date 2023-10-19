require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT
const swaggerUI = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml');

app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

require("./Routes/sellerRoutes")(app)
require("./Routes/carsRoutes")(app)
require("./Routes/CarsSellerRoutes")(app)

app.listen(port, () => {
    require("./db").sync()
    .then(console.log("Synchronized"))
    .catch((error) => console.log("Error:", error))
    console.log(`API up at: http://localhost:${port}/docs`);
})