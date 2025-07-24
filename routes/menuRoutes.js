const express  = require('express')
const router = express.Router();
const Menu = require('./../models/Menu')

// POST Method to add a Menu item
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menu(data); 
    const response = await newMenu.save();
    console.log('Data saved');
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET method to get the Menu Item
router.get('/', async (req, res) => {
  try {
    const data = await Menu.find(); 
    
    console.log('Data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Comment added for testing
module.exports = router;