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
        email: {
            type: Sequelize.STRING,
            allownull: false
        },
        phone:{
            type: Sequelize.STRING,
            allownull: false
        } 
    })
    return Seller
};