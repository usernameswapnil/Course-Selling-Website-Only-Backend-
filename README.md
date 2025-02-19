# Course-Selling-Website-Only-Backend-
## Description
You need to implement a course selling website. Make sure you setup your own mongodb instance before starting 
It needs to support two types of users:
1. Admins
2. Users

Admins are allowed to sign up, create courses.
Users are allowed to signup, view courses, purchase courses.
This in the real life would translate to an app like Udemy

This one does not use authentication in the right way. We will learn how to do that in the next assignment.
For this one, in every authenticated requests, you need to send the username and password in the headers( and not the jwt).
This is the reason why this assignment does not have a sign in route.

You need to use mongodb to store all the data persistently.

## Routes
## Admin Routes
- POST/admin/signup
  Description: Create a new admin account.
  Input Body: {username:'admin', password: 'pass'}.
  Output: {message: 'Admin created successfully'}
- POST/admin/courses
  Description: Create a new course.
  Input: Headers: {'username':'username', 'password':'password'}, Body:{ title: 'course title',price:100, imagelink:'https://linktoimage.com'}
  Output: {message: 'Course created succesfully', courseId: "new course id"}
- GET/admin/courses
  Description: Returns all the courses.
  Input: Headers:{'username':'username', 'password':'password'}
  Output: {courses: [{id:1, title:'courses title', description: 'course description', price:100, imageLink: 'https://linktoimage.com', published:true},...]}
 


## User Routes
- POST/users/signup
  Description: Create a new user account.
  Input : {username:'user', password: 'pass'}.
  Output: {message: 'User created successfully'}

- GET/users/courses
  Description: Lists all the courses purchased by the user.
  Input: Headers: {'username': 'username','password':'password'}
  Output: {courses:[{id:1, title:'course Title, description:'course description', price:100, iamgeLink:'https://linktoimage.com', published:true}...]}]}

- POST/users/courses: courseId
  Description:Purchase a course, courseId in the URL path should be replaced with the ID of the course to be purchased.
  Input: Headers: {'username':'username', 'password':'password'}
  Output: {message: 'Course purchased succesfully'}

  GET/users/purchasedCourses
  Description: List all the courses purchased by the user.
  Input: Headers:{'username':'username', 'password':'password'}
  Output: {purchasedcourses: [{id:1, title:'course title', description: 'course description', price:100, imageLink: 'https://linktoimage.com', published:true},...]}
 }
