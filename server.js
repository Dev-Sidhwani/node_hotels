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


// Creating a server
// const express = require('express');
// const app = express();
// const db = require('./db');
// const Person = require('./models/Person')
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// app.use(express.json());



// app.get('/emp', (req,res) =>{
//     var empData = {
//         name:"alex",
//         id:123,
//         city:'mumbai'
//     }
//     res.send(empData)
// })

// app.post('/person', async (req, res) =>{
//       try{
//       // Assuming the request body contains the person data
//       const data = req.body;  
//       //  create a new person document using the mongoose model
//       const newPerson = new Person(data);

//       // Save the new person to the database
//       const response = await newPerson.save();
//       console.log('Data Saved');
//       res.status(200).json(response);
        
//       }catch(err){
//           console.log(err);
//           res.status(500).json({error: 'Internal Server Error'})
//       }
// })

// app.listen(3000, () =>{
//   console.log('listening on port 3000');
// })  


// app.get('/data', (req, res) =>
// {
//   res.send("Revolve Solutions Private Limited");
// })

// app.listen(7000,() =>{
//   console.log("Listening To Port 7000")
// });


// app.get('/me', (req, res) => {
//   res.send("Internship");
// })
// app.listen(6000, () => {
//   console.log("Listening to port 6000")
// })

const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/Person');


app.use(express.json()); // to parse incoming JSON

app.get('/emp', (req, res) => {
  res.send({ name: "alex", id: 123, city: "mumbai" });
});









app.get("/", (req, res) => {
  res.send("Server is running");
});


// // POST Method to add a Menu item
// app.post('/menu', async (req, res) =>{
//   try{
//     const data = req.body
//     const newMenu = new Menu(data);
//     const response = await newMenu.save();
//     console.log('dta saved');
//     res.status(200).json(response);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error: 'Internal Server Error'})
//   }
// })

// // GET method to get the Menu Item
// app.get('/menu', async (req, res) =>{
//   try{
//     const data = await Menu.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error: 'Internal Seerver Error'})
//   }
// })



// import the router files
 const personRoutes  = require('./routes/personRoutes');
 const menuRoutes = require('./routes/menuRoutes')

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(3000, () => {
  console.log('🚀 Server listening on http://localhost:3000');
});


