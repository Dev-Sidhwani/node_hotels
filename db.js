const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURl = 'mongodb+srv://Dev:Dev12345@cluster0.4ety5lf.mongodb.net/hotel?retryWrites=true&w=majority';
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL);

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
