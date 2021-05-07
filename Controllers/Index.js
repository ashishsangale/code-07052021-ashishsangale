exports.Bmi = (height, weight) => {
    return Math.round(weight / ( height * height ) * 10) / 10;
}

exports.CategoryRisk = (bmi) => {
    let response = {};
    let count = 0;
    switch (true) {
        case (bmi <= 18.4):
            response.category = "Underweight";
            response.risk = "Malnutrition risk";
                break;
        case (bmi >= 18.5 && bmi <= 24.9):
            response.category = "Normal weight";
            response.risk = "Low risk";
                break;
        case (bmi >= 25 && bmi <= 29.9):
            response.category = "OverWeight";
            response.risk = "Enhanced risk";
            response.count = count++;
                break;
        case (bmi >= 30 && bmi <= 34.9):
            response.category = "Moderately Obese";
            response.risk = "Medium risk";
                break;
        case (bmi >= 35 && bmi <= 39.9):
            response.category = "Severly Obese";
            response.risk = "High risk";
                break;

        default:
            response.category = "Very Severly Obese";
            response.risk = "Very high risk";
                break;
    }
    return response;
}