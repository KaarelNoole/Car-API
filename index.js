require("dotenv").config()
const app = require('express')()
const port = process.env.PORT
const swaggerUI = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml');
const brands = require("./brands/data")
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE,process.env.DB_USER,process.env.DPASS,{
    host: process.env.HO ,
    dialect: "mariadb"
})

try {
     sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


require("./Routes/sellerRoutes")(app)


app.listen(port, () => {
    require("./db").sync()
        .then(console.log("Synchronized"))
        .catch((error) => console.log("Error:", error))
    console.log(`API up at: http://localhost:${port}`);
})
