module.exports = (dbConnection, Sequelize) => {
    const Price = dbConnection.define("Price",{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: Sequelize.INTEGER,
            allownull: false
        },
        currency: {
            type: Sequelize.STRING,
            allownull: false
        },
    })
    return Price
};