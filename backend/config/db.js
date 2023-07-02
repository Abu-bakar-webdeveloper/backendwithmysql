const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'crudapi',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("succesfully connected to our db")
     } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = {sequelize, connectDB}