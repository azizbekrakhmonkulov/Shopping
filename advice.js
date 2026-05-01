// const moment = require('moment');
// const time = moment().format('YYYY-MM-DD HH:mm:ss');
// console.log(time);

/* Callback function:
   define   call
   callback  function

*/

// const list = [
//     "be a good student", // 0-20
//     "choose right boss", // 21-30
//     "start your own business", // 31-40
//     "do what you are good at", // 41-50
//     "invest in young generation", // 51-60
//     "now do a rest and enjoy your life", // 61
// ];

// // define
// function giveAdvice(age, callback) {
//     if(typeof age !== 'number') callback("Yosh sonlarda yozilish kerak", null);
//     else if(age >= 61) callback(null, list[5]); 
//     else if(age >= 51) callback(null, list[4]); 
//     else if(age >= 41) callback(null, list[3]); 
//     else if(age >= 31) callback(null, list[2]); 
//     else if(age >= 21) callback(null, list[1]); 
//     else callback(null, list[0]); 

// }

// // call
// giveAdvice(45, (err, data) => {
//     if(err) console.log("Error: ", err);
//     else {
//         console.log("Data:", data);
//     }
// })
// console.log("Time:", time);


const list = [
    "Nasiyaga sovda yoq",
    "Osh salat non",
    "Manti qatiq choy",
    "Somsa sous non",
    "Pizza souse coke",
    "Pibibpap k-bbq sul",
    "Spagety wine ",
    "Borsh olive vodka"
]
const list2 = [
    "",
    "Uzbek",
    "Korean",
    "Italy",
    "Russian",
    "USA"

]

function orderSet(money, callback) {
    if (typeof money !== 'number') {
        callback("Puling yoq bo'lsa nimaga kelding", null);
    }
    else if (money >= 70) {
        callback(null, `${list2[4]} ${list[7]}`);
    }
    else if (money >= 60) {
        callback(null, `${list2[3]} ${list[6]}`);
    }
    else if (money >= 50) {
        callback(null, `${list2[2]} ${list[5]}`);
    }
    else if (money >= 40) {
        callback(null, `${list2[5]} ${list[4]}`);
    }
    else if (money >= 30) {
        callback(null, `${list2[1]} ${list[3]}`);
    }
    else if (money >= 20) {
        callback(null, `${list2[1]} ${list[2]}`);
    }
    else if (money >= 10) {
        callback(null, `${list2[1]} ${list[1]}`);
    }
    else {
        callback(null, `${list2[0]} ${list[0]}`);
    }
}

orderSet(45, (err, data) => {
    if(err) console.log("ERROR:", err);
    else {
        console.log("Result:", data);
    }
})
