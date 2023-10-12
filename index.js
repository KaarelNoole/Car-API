require("dotenv").config()
const express = require('express')
const app = express()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml');

app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


require("./Routes/brandsRoutes")(app)


app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})