const express = require("express");
const adminMiddleware = require("../Middleware/admin");
const {Admin, Course}= require("../db/index2");
const router = express.Router();
// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    //check if a user with this username already exists
    Admin.create({
        username:username,
        password:password
    })
    .then(function(req,res){
        res.json({
            msg:"Admin created Successfully"
        })
    })

});
router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title= req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    const newCourse=await Course.create({
        title:title,
        description: description,
        imageLink: imageLink,
        price:price
    })
    res.json({
        msg:"Course added successfully", courseId:newCourse._id
    })


});
router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response= await Course.find({});
    res.json({
        courses:response
    })
});
module.exports = router;
