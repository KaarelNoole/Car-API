require("dotenv").config()
const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.PORT
const swaggerUI = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml');

app.use("/client", express.static("frontend"))


app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

require("./Routes/priceRoute")(app)
require("./Routes/locationRoutes")(app)
require("./Routes/carsRoutes")(app)
require("./Routes/CarsSellerRoutes")(app)
require("./Routes/sellerRoutes")(app)

app.listen(port, () => {
    require("./db").sync()
    .then(() => {
        console.log("Sync succeeded!")
        console.log(`API up at: http://localhost:${port}/docs`)
        console.log(`API up at: http://localhost:${port}/client`)
    })
    .catch((error) => console.log("Sync failed:\n", error))
})
