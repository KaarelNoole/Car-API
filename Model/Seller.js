const { Sequelize } = require("sequelize")

module.exports = (dbConnection, Sequelize) => {
    const Seller = dbConnection.define("Seller",{
        id: {
            type: Sequelize.INTEGER,
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