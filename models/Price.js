module.exports = (dbConnection, Sequelize) => {
    const Price = dbConnection.define("Price", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: Sequelize.DECIMAL
        },
        currency: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
}