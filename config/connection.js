const mongoose = require('mongoose');

const connectDB = async function() {
    await mongoose.connect(process.env.DB_URL, {
        USENewUrlParser: true
    }, function (err) {
        if (err) throw new Error('Connection error ${err}');
        console.log('DB connected!')
    });
}

module.exports = connectDB;