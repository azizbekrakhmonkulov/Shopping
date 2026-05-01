/* Callback function:
   define   call
   callback  function

*/

// // define
// function division(a, b, callback) {
//     if (b === 0) {
//         callback("Not allowed to divide by zero", null);
//     }else {
//         callback(null, a % b);
//     }
// }

// // call
// division(10, 7, function (err, data) {
//     if (err) {
//         console.log("Error: ", err);
//     }else {
//         console.log("Result: ", data);
//         console.log("....");
//     }
// });

function introduce(a, b, callback) {
    if (b !== "MIT" || a !== 43) {
        callback("Darsni qaytadan ko'rib chiq", false);
    }else {
        callback(false, a + b);
    }
} 

introduce(43, "MIT", function (nor, data)  {
    if (nor) {
        console.log("ERROR", nor);
    }else {
        console.log("RESULT", data);
    }
})