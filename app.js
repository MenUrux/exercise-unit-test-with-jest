/* // This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum }; */


/* const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
} */

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(amount){
    let euroAmount = amount / oneEuroIs.USD;
    return euroAmount * oneEuroIs.JPY;
}

function fromEuroToDollar(amount){
    return amount * oneEuroIs.USD;
}

function fromYenToPound(amount){
    let euroAmount = amount / oneEuroIs.JPY;
    return euroAmount * oneEuroIs.GBP;
}



/* console.log(fromDollarToYen(20))
console.log(fromEuroToDollar(20))
console.log(fromYenToPound(20)) */

module.exports = { fromDollarToYen, fromEuroToDollar , fromYenToPound }; 