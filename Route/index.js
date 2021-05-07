const express = require('express');
const router = express.Router();

//dummy data provided
let data = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
"HeightCm": 167, "WeightKg": 82}];

router.get('/bmi', (req, res, next) => {
    let count = 0;
    data.map((person) => {
    
        let category;
        let risk;
        const heightM = person.HeightCm/100;
        const bmi = Math.round(person.WeightKg / ( heightM * heightM ) * 10) / 10;
        
        switch (true) {
            case (bmi <= 18.4):
                category = "Underweight";
                risk = "Malnutrition risk";
                    break;
            case (bmi >= 18.5 && bmi <= 24.9):
                category = "Normal weight";
                risk = "Low risk";
                    break;
            case (bmi >= 25 && bmi <= 29.9):
                category = "OverWeight";
                risk = "Enhanced risk";
                count++;
                    break;
            case (bmi >= 30 && bmi <= 34.9):
                category = "Moderately Obese";
                risk = "Medium risk";
                    break;
            case (bmi >= 35 && bmi <= 39.9):
                category = "Severly Obese";
                risk = "High risk";
                    break;

            default:
                category = "Very Severly Obese";
                risk = "Very high risk";
                    break;
        }
        person.BMI = bmi;
        person.BMICategory=category;
        person.HealthRisk=risk;        
    })

    const response = {
        data,
        Message: `Number of Overweight people are ${count}`
    }
    
    res.json({response})
    
});

module.exports = router;