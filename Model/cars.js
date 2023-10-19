module.exports = (dbConnection, Sequelize)=>{
    const Car = dbConnection.define("cars",{
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: Sequelize.STRING,
            allowNull: false
        },
        model:{
            type: Sequelize.STRING,
            allowNull: false
        },
        Year: {
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