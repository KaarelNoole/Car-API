module.exports = (dbConnection, Sequelize) => {
    const Car = dbConnection.define("Car", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: Sequelize.STRING,
            allowNull: false
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false
        },
        year: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        origin: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return Car
}