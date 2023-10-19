require("dotenv").config()
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST ,
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

const db = {}
db.Sequelize = Sequelize
db.connection = sequelize
db.cars = require("../Model/cars")(sequelize,Sequelize)
db.sellers = require("../Model/Sellers")(sequelize,Sequelize)
db.Cars = require("../Model/CarsSeller")(sequelize,Sequelize, db.cars, db.sellers)

db.cars.belongsToMany(db.sellers, {through: db.CarsSeller})
db.sellers.belongsToMany(db.cars, {through: db.CarsSeller})
db.Cars.hasMany(db.CarsSeller)
db.sellers.hasMany(db.CarsSeller)
db.CarsSeller.belongsTo(db.Cars)
db.CarsSeller.belongsTo(db.sellers)

sync = async ()=>{
    //await sequelize.sync({ force: true }) // Erase all and recreate
    await sequelize.sync({ alter: true }) // Alter existing to match the model
}

module.exports = {db, sync }