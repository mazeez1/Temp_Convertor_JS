
// grab the inputs from the forms 
const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

// create a varible for the class of inputs
const inputs = document.getElementsByClassName("input");

// go through each element in inputs  
for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    // when you click on the bottom 
    input.addEventListener("input", function (e) {
        // gets the float value of the computation from the
        // function event e.  
        let value = parseFloat(e.target.value);
        
        // for each button we create a switch statement 
        switch (e.target.name) {
            case "celcius":
                // the calculations are performed and the statement is broken
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case "fahrenheit":

                // the calculations are performed and the statement is broken
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "kelvin":

                // the calculations are performed and the statement is broken
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    });
}