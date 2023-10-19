const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
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
db.cars = require("./models/cars")(sequelize,Sequelize)
db.seller = require("./models/Seller")(sequelize,Sequelize)
db.CarsSellers = require("./models/CarsSeller")(sequelize,Sequelize, db.cars, db.seller)

db.cars.belongsToMany(db.seller, {through: db.CarsSellers})
db.seller.belongsToMany(db.cars, {through: db.CarsSellers})
db.cars.hasMany(db.CarsSellers)
db.seller.hasMany(db.CarsSellers)
db.CarsSellers.belongsTo(db.cars)
db.CarsSellers.belongsTo(db.seller)

sync = async ()=>{
  //await sequelize.sync({ force: true }) // Erase all and recreate
  await sequelize.sync({ alter: true }) // Alter existing to match the model
}

module.exports = { db, sync }