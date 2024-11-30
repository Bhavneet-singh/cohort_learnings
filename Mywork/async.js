// // function sum(n) {
// //   let ans = 0;
// //   for (let i = 0; i <= n; i++) {
// //     ans += i;
// //   }
// //   return ans;
// // }

// // function sum100() {

// // console.log(sum(100));
// // }

// // setTimeout(() => {
// //   sum100();
// // }, 1000);

// // console.log("Hello world");

// const fs = require("fs");

// function fileRead() {
//   return new Promise(function (resolve) {
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// fileRead().then(onDone);


// const p=new Promise(function(onDone){

// });
// console.log(p);

function asyncFunction() {
    let p = new Promise(function(resolve){
        setTimeout(() => {
           resolve('hi there'); 
        }, 1000);
    
    });
    return p ; 
    
}


async function main() {
    let val = await asyncFunction() ; 
    console.log("hi there ")
}

main();

