const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mariadb",
  define: {
    timestamps: true
  },
  logging: console.log
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
db.locations = require("./models/Location")(sequelize,Sequelize)
db.prices = require("./models/Price")(sequelize,Sequelize)
db.cars = require("./models/Cars")(sequelize,Sequelize)
db.seller = require("./models/Seller")(sequelize,Sequelize)
db.CarsSellers = require("./models/CarsSeller")(sequelize,Sequelize, db.cars, db.seller)

db.cars.belongsToMany(db.seller, {through: db.CarsSellers})
db.seller.belongsToMany(db.cars, {through: db.CarsSellers})
db.cars.hasMany(db.CarsSellers)
db.seller.hasMany(db.CarsSellers)
db.CarsSellers.belongsTo(db.cars)
db.CarsSellers.belongsTo(db.seller)

sync = async () => {
  if (process.env.DROP_DB === "true") {
      console.log("Begin DROP")
      await db.connection.query('SET FOREIGN_KEY_CHECKS = 0')
      console.log("Checks disabled")
      await db.connection.sync({ force: true })
      console.log('Database synchronised.')
      await db.connection.query('SET FOREIGN_KEY_CHECKS = 1')
      console.log("Checks enabled")

      const [car, createdG] = await db.car.findOrCreate({
          where: {
              brand: "Tesla"
          },
          defaults: {
              brand: "Tesla",
              model: "Model x",
              year: 2019,
              origin: "USA"
          }
      })
      console.log("car created: ", createdG)
      const [Seller, createdP] = await db.seller.findOrCreate({
          where: {
              name: "Kaarel Noole"
          },
          defaults: {
              name: "Kaarel Noole"
          }
      })
      console.log("seller created: ", createdP)
      const [CarsSeller, createdGP] = await db.CarsSellers.findOrCreate({
          where: {
              id: 1
          },
          defaults: {
              CarId: car.id,
              SellerId: seller.id,
          }
      })
      console.log("carsSeller created: ", createdGP)
  }
  else {
      console.log("Begin ALTER")
      await db.connection.sync({ alter: true }) // Alter existing to match the model
      console.log('Database synchronised.')
  }
}

module.exports = { db, sync }