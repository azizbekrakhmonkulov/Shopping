/* Acynchronous function: Callback vs  Async vs Promise

   define        call
   callback      function
   async/await   then/catch
   promise       then/catch

*/


// define
function division(a, b, callback) {
    if (b === 0) {
        callback("Not allowed to divide by zero", null);
    }else {
        callback(null, a % b);
    }
}

// call

console.log("Passed here A");

division(10, 7, function (err, data) {
    if (err) console.log("Error: ", err);
    else {
        setTimeout(function() {
            console.log("Passed here B");
            console.log("Result: ", data);
            console.log("....");
        }, 2000);
        
    }
});

console.log("Passed here C");

//  Async/Await
async function division(a, b,) {
    if (b === 0) {
        throw new Error("Not allowed to divide by zero", null);
    }else {
        return a % b;
    }
}

division(10, 3).then(data => {
    console.log("Result: ", data);
    console.log(".... Async/Await");
}).catch(err => {
    console.log("Error: ", err);
});

// Promise 
function division(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Not allowed to divide by zero");
        }else {
            setTimeout(function() {
                resolve(a % b);
            }, 5000);
        }
    });
}

division(10, 7).then(data => {
    console.log("Result: ", data);
    console.log(".... Promise");
}).catch(err => {
    console.log("Error division: ", err);
});