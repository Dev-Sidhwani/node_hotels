// var _ = require('lodash');
// // 

// // Different ways to declare functions
// function add(a,b){
//     return a+b;
// }

// var result = add(5,7);
// console.log(result)

// var add = function(a,b,c){
//     return a+b+c;
// }

// var result = add(3,6,9);
// console.log(result)

// var add = (a,b) => {
//     return a+b;
// }
//  var result = add(8, 5);
//  console.log(result);


// //  Callback function

// function myCallback() {
//   console.log("This is a callback function!");
// }

// function processData(callback) {
//   console.log("Processing data");
  
//   callback(); 
// }

// processData(myCallback); 



// // Modules

// var fs = require('fs');
// var os = require('os');


// let user = os.userInfo();
// console.log(user.username)

// fs.appendFile('greeting.txt', 'hi' + user.username, ()=>{
//     console.log("Internship")
// })


// // Lodash

// var data = ["car", "car", "bike", "car", "age"]
// var filter = _.uniq(data);
// console.log(filter);



const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/Person');
require('dotenv').config();

const PORT  = process.env.PORT || 3000


app.use(express.json()); // to parse incoming JSON

app.get('/emp', (req, res) => {
  res.send({ name: "alex", id: 123, city: "mumbai" });
});


app.get("/", (req, res) => {
  res.send("Server is running");
});



// import the router files
 const personRoutes  = require('./routes/personRoutes');
 const menuRoutes = require('./routes/menuRoutes')

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);



app.listen(PORT, () => {
  console.log('🚀 Server listening on http://localhost:3000');
});


