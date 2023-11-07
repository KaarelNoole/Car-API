module.exports = (dbConnection, Sequelize) => {
    const Location = dbConnection.define("Location", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return Location
}