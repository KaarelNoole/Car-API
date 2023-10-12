const app = require('express')()
const port = 8080
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json');
const sellers = require("./Sellers/data")
const locations = require("./Locations")
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE,process.env.DB_USER,process.env.DPASS,{
    host: process.env.HO ,
    dialect: "mariadb",
    define: {
        timestamps: true
    },
    logging: true
})

try {
     sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


app.get("/Sellers",(req,res)=>{
    res.send(sellers.getAll())
})

app.get("/Sellers/:id",(req,res)=>{
    res.send(sellers.getById(req.params.id))
})

app.listen(port, () => {
    require("./db").sync()
        .then(console.log("Synchronized"))
        .catch((error) => console.log("Error:", error))
    console.log(`API up at: http://localhost:${port}`);
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
res.send(brands)


app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`);
})

app.get("/Locations",(req,res)=>{
    res.send(locations.getAll())
})

app.get("/Locations/:id",(req,res)=>{
    res.send(locations.getById(req.params.id))
    if (foundThing === undefined) return res.status(404).send({error: 'location not found'})
    res.send(foundThing)
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
res.send(locations)

require("./ Routes/sellerRoutes")(app)

function getBaseur1(request){
    return(request.connection && request.connection.encrypted ? "https": "http")
    + "://" +request.header.host
}