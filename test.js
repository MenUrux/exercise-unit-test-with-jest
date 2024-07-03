// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound  } = require('./app.js');

/* // Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

 */

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
/*     const { fromEuroToDollar } = require('./app.js');
 */
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.261 yen", function() {
    const yen = fromDollarToYen(3.5);
    // must make the same operation as the function
    const expected = (3.5 / 1.07) * 156.5;
    expect(yen).toBe(expected);
});

test("From Yen to Pounds should be 0.0055591054313099", function() {
    const pounds = fromYenToPound(3.5);
    // must make the same operation as the function
    const expected = (3.5 / 156.5) * 0.87;
    expect(pounds).toBe(expected);
});

/* test("From Yen to Pounds should be correct", function() {
    const pounds = fromYenToPound("hola");
    // must make the same operation as the function
    const expected = (3.5 / 156.5) * 0.87;
    expect(pounds).toBe(expected);
}); */