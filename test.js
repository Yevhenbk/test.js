test("One euro should be 1.206 dollars", function(){

    const { fromEuroToDollar } = require('./app.js')


    const dollars = fromEuroToDollar(3.5)

   
    const expected = 3.5 * 1.206; 
    

     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One yen should be 109.13 dollars", function(){

    const { fromDollarToYen } = require('./app.js')


    const yen = fromDollarToYen(3.5)

   
    const expected = 3.5 * 109.13; 
    

     expect(fromDollarToYen(3.5)).toBe(381.955); 
})

test("One pound should be 0.0067 yen", function(){

    const { fromYenToPound } = require('./app.js')


    const yen = fromYenToPound(3.5)

   
    const expected = 3.5 * 0.0067; 
    

     expect(fromYenToPound(3.5)).toBe(0.023450000000000002); 
})
