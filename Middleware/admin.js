const {Admin}=require("../db")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username= req.headers.username; //swapnil@gmail.com
    const password= req.headers.password;//1234
    //checking if the admin exists in the db
    Admin.findOne({
        username: username,
        password: password
    }).then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg: "User does not exist"
            })
        }
    })

}
module.exports = adminMiddleware;    
