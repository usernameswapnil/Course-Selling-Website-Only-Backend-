const {User}=require("../db/index2");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username= req.headers.username; //swapnil@gmail.com
    const password= req.headers.password;//1234
    //checking if the admin exists in the db
    User.findOne({
        username: username,
        password: password
    }).then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg: "Admin does not exist"
            })
        }
    })
}
module.exports = userMiddleware;
    