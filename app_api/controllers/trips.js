
const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips lists all the trips
// Regardless of outcome, response must include HTML status code 
// // and JSON message to the requesting client

const tripsList = async (req, res) =>{
    const q= await Model
    .find({}) 
    .exec(); // No filter, return all records
    
    // Uncomment the following line to show results of querey 
    // on the console
    //console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // Return resulting trip list return res
        // .status(200) DEPRECATED
        return res.status(200).json(q); // FIX
    }
};

const tripsFindByCode = async (req, res) =>{
    const q = await Model
    .find({'code' : req.params.tripCode}) // Return single record
    .exec();
    
    if(!q)
    { 
        return res
            .status(404)
            .json(err);
    } else { 
        return res.status(200).json(q);
    }
};

// POST: /trips - Adds a new Trip
// Regardless of outcome must include HTML status code & JSON message requesting client.
const tripsAddTrip = async (req, res) => { 
    const newTrip = new Trip({ 
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    try {
        const q = await newTrip.save(); 

        return res
            .status(201)
            .json(q);
    } catch (err) {

        return res
            .status(400)
            .json(err);
    }
};

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async(req, res) => {
// Uncomment for debugging
console.log(req.params);
console.log(req.body);

const q = await Model
.findOneAndUpdate(
    { 'code' : req.params.tripCode },
    {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    },
    { new: true } // <--- CRITICAL FIX: Tells Mongoose to return the UPDATED document
)
.exec();

if(!q)
{ // Database returned no data or update failed
    return res
    .status(400)
    .json({ "message": "Update failed or trip not found." }); 
} else { // Return resulting updated trip
    return res
    .status(200) // Changed to 200 OK for successful update
    .json(q);
}
// Uncomment the following line to show results of operation
// on the console
// console.log(q);
};

module.exports = { 
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};

