const express = require('express')
const { off } = require('process')
const app = express()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml');
const { Sequelize } = require('sequelize');
const { error } = require('console')
const sequelize = new Sequelize(process.env.DATABASE,process.env.DB_USER,process.env.PASS, {
    host: process.env.DB_HOST ,
    dialect: "mariadb"
})

try {
    sequelize.authenticate().then(() => {
        console.log('Connetion has been established successfully.')
    });
}catch (error) {
    console.error('Unable to connect to the database', error);
}
app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

    function getBaseurl(request){
        return (request.conncetion && request.conncetion.encrypted ? "https": "http")
         + "://" +request.headers.host
    }


app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})
//MartinJaKaarel - parool