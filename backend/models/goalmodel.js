const {Sequelize, DataTypes} = require("sequelize");
const { sequelize } = require("../config/db");

const Student = sequelize.define("students", {
    StudentName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FatherName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    RollNumber: {
      type: DataTypes.INTEGER,
    },
    PhoneNumber: {
      type: DataTypes.INTEGER,
    }
 });
 
 sequelize.sync().then(() => {
    console.log('student table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });

module.exports = sequelize.model('students', Student)