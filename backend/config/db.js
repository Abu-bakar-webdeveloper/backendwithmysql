const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://abubakar:T2qz6yJYxBDFnBQt@crudcluster.eyywlsk.mongodb.net/mernapp?retryWrites=true&w=majority')

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB