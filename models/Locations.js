module.exports = (dbConnection, Sequelize) => {
    const Location = dbConnection.define("Location", { 
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        city: {
            type: Sequelize.STRING,
            allownull: true
        },
        country: {
            type: Sequelize.STRING,
            allownull: true
        }
    })
    return Location
}