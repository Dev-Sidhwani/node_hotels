// const mongoose = require('mongoose');

// // Defining MongoDB connection URL
// const mongoURl =  'mongodb+srv://Dev:Dev12345@cluster0.4ety5lf.mongodb.net/hotel';


// // Set Up MongoDB Connection
// mongoose.connect(mongoURl );


// // get the default connection
// // Mongoose maintains a default connection object representing the MongoDB connection

// const db = mongoose.connection;

// // Define Event Listeners for Database Connection
// db.on('connected', () =>{
//     console.log('Connected to MongoDB Server')
// });

// db.on('error', (err) =>{
//     console.log('MongoDB Connection Error')
// });

// db.on('disconnected', () =>{
//     console.log('MongoDB Disconnected')
// });

// // Export the Database Connection
// module.exports = db;

const mongoose = require('mongoose');

const mongoURl = 'mongodb+srv://Dev:Dev12345@cluster0.4ety5lf.mongodb.net/hotel?retryWrites=true&w=majority';

mongoose.connect(mongoURl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('✅ Connected to MongoDB Server');
});

db.on('error', (err) => {
  console.error('❌ MongoDB Connection Error:', err);
});

db.on('disconnected', () => {
  console.log('⚠️ MongoDB Disconnected');
});

module.exports = db;
