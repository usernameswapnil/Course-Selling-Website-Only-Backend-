const mongoose = require('mongoose')

// Connect to MongoDB
mongoose.connect('mongodb://Admin69:swapnilhero123@cluster1-shard-00-00.rpirq.mongodb.net:27017,cluster1-shard-00-01.rpirq.mongodb.net:27017,cluster1-shard-00-02.rpirq.mongodb.net:27017/?replicaSet=atlas-tmwehx-shard-0&ssl=true&authSource=admin');
// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});
const UserSchema = new mongoose.Schema({
    // Schema definition here
});
const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imgLink: String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}    