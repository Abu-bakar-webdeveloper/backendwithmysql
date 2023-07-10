const asyncHandler = require('express-async-handler')

const students = require('../models/goalmodel');
const { sequelize } = require('../config/db');
const getGoals = asyncHandler(async (req ,res) =>{
    const goals = await students.findAll()
    res.status(200).json(goals)
})
// const getGoals = sequelize.sync().then(() => {

//     students.findAll().then(res => {
//         console.log(res)
//     }).catch((error) => {
//         console.error('Failed to retrieve data : ', error);
//     });

// }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });
const setGoal = asyncHandler(async (req ,res) =>{
    const { StudentName, FatherName, RollNumber, PhoneNumber } = req.body;

    const goal = await students.create({
      StudentName: StudentName,
      FatherName: FatherName,
      RollNumber: RollNumber,
      PhoneNumber: PhoneNumber
    });
    res.status(200).json(goal)
})
// const setGoal = sequelize.sync().then(() => {
//     console.log('student table created successfully!');
 
//     students.create({
//         StudentName: body.req.StudentName,
//         FatherName: body.req.FatherName,
//         RollNumber: body.req.RollNumber,
//         PhoneNumber: body.req.PhoneNumber
//     }).then(res => {
//         console.log(res)
//     }).catch((error) => {
//         console.error('Failed to create a new record : ', error);
//     });
 
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });
const updateGoal = asyncHandler(async (req ,res) =>{
    const goal = await students.findByPk(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await students.update(req.body, {
        where: {
          id: req.params.id
        },
        returning: true
      })
    res.status(200).json(updateGoal)
})
const deleteGoal = asyncHandler(async (req ,res) =>{
    const goal = await students.destroy({
                 where: {
                   id: req.params.id
                 }})

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    res.status(200).json({id: req.params.id})
})
// const deleteGoal = sequelize.sync().then(() => {

//     students.destroy({
//         where: {
//           id: req.params.id
//         }
//     }).then(() => {
//         console.log("Successfully deleted record.")
//     }).catch((error) => {
//         console.error('Failed to delete record : ', error);
//     });
  
//   }).catch((error) => {
//       console.error('Unable to create table : ', error);
//   });

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}