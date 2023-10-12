const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE,process.env.DB_USER,process.env.DPASS,{
    host: process.env.HO ,
    dialect: "mariadb",
    define: {
        timestamps: true
    },
    logging: true
})

try {
     sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
const db = {}
db.Sequelize = Sequelize
db.connection = sequelize
db.sellers = require("./Model/Seller")(sequelize,Sequelize)

sync = async () =>{
    await sequelize.sync({force:true})
    await sequelize.sync({alter:true})

}

module.exports = {db,sync}