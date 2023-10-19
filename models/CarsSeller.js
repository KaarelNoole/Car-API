module.exports = (dbConnection, Sequelize, Car, Seller) => {
    const CarsSeller = dbConnection.define("CarsSeller", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        CarId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Car,
                key: "id"
            }
        },

        SellerId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Seller,
                key: "id"
            }
        }
    })
    return CarsSeller
}