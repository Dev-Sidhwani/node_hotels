const express  = require('express')
const router = express.Router();
const Person = require('./../models/Person');

 router.post('/', async(req, res) => {
  console.log('Data Saved');
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    res.status(201).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET method to get the person
 router.get('/', async (req, res) => {
  try{
     const data = await Person.find();
    console.log("Data Fetched");
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'})
  }

 
})

 router.get('/:workType',async(req, res) =>{
  try{
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
      const response = await Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);

    }else{
      res.status(404).json({error:'Invalid work type'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internet server error'});
  }
})

router.put('/:id', async (req, res) =>{
    try{
        const personId = req.params.id;
        const updatePersonData = req.body;

        const response  = await Person.findByIdAndUpdate(personId,updatePersonData, {
            new: true,
            runValidators: true,

        })

        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }

        console.log('Data Updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internet Server Error'});
    }
})

router.delete('/:id', async (req, res) =>{
  try{
    const personId = req.params.id;


    // Assuming you have a person model
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({error: 'Person not found'});
    }
    console.log('data delete');
    res.status(200).json({message: 'person deleted successfully'});
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

module.exports = router;
