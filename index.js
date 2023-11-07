require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT
const swaggerUI = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml');

app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

<<<<<<< HEAD
//require("./Routes/priceRoutes")(app)
require("./Routes/sellerRoutes")(app)
require("./Routes/carsRoutes")(app)
require("./Routes/CarsSellerRoutes")(app)
//require("./Routes/locationRoutes")(app)
=======

require("./Routes/carsRoutes")(app)
require("./Routes/CarsSellerRoutes")(app)
require("./Routes/sellerRoutes")(app)
>>>>>>> 81bd236b44fd6d85d6f6c06b284e03ae4ab0ce15

app.listen(port, () => {
    require("./db").sync()
    .then(console.log("Synchronized"))
    .catch((error) => console.log("Error:", error))
    console.log(`API up at: http://localhost:${port}/docs`);
})
