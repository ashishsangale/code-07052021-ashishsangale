const express = require('express');
const router = express.Router();
const controller = require('../Controllers/Index');

//dummy data provided
let data = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
"HeightCm": 167, "WeightKg": 82}];

router.get('/bmi', (req, res, next) => {
    
    data.map((person) => {
        const heightM = person.HeightCm/100;
        const bmi = controller.Bmi(heightM, person.WeightKg);
        let healthRisk = controller.CategoryRisk(bmi);
        
        person.BMI = bmi;
        person.BMICategory=healthRisk.category;
        person.HealthRisk=healthRisk.risk;  
    })

    const count = data.filter(x => x.BMICategory == 'OverWeight').length;
    
    const response = {
        data,
        Message: `Number of Overweight people are ${count}`
    }
    
    res.json({response})
    
});

module.exports = router;