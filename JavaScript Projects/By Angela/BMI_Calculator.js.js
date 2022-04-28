//bmi = w/ h2

// Math.pow(base , exponent ) = 8*2 = 8^2 = 64

function bmiCalculator(weight,height) {

    var bmi = (weight / Math.pow(height,2));
    return Math.round(bmi); //rounds no. eg 2.5->3  , 2.3->2
}

bmiCalculator(65,1.8);


