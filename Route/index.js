const express = require('express');
const router = express.Router();
const controller = require('../Controllers/Index');

//dummy data provided
let data = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
"HeightCm": 167, "WeightKg": 82}];

//get route for sample display
router.get('/bmi', (req, res, next) => {
    
    const response = controller.generator(data)
    res.json({response})
    
});

//post route for checking the consistency
router.post('/bmi', (req,res,next) => {
    let arr = req.body;
    const response = controller.generator(arr)
    res.json({response})
})

module.exports = router;