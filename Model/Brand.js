module.exports = (dbConnection, Sequelize)=>{
    const Brand = dbConnection.define("Brand",{
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: Sequelize.STRING,
            allowNull: false
        },
        origin: {
            type: Sequelize.STRING,
            allowNull: false
        }
})
    return Brand
}