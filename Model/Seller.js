const { Sequelize } = require("sequelize")

module.exports = (dbConnection, Sequelize) => {
    const Seller = dbConnection.def.define("Seller",{
        id: {
            type: Sequelize.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allownull: false
        },
        Email: {
            type: Sequelize.STRING,
            allownull: false
        }
    })
};