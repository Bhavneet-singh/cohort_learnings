// // // let firstName = 'Bhavneet' ;
// // // let lastName = 'Singh'

// // // let isMarried = false ;

// // // if(isMarried){
// // //     console.log(firstName +" is married")
// // // }
// // // else{
// // //     console.log(firstName +" Not Married") ;
// // // }

// // const user1 = [
// //   {
// //     firstName: "harkirat",
// //     gender: "male",
// //   },
// //   {
// //     firstName: "bhavneet",
// //     gender: "female",
// //   },
// // ];

// // for (let i = 0; i < user1.length; i++) {
// //   if (user1[i].gender == "male") {
// //     console.log(user1[i].firstName);
// //   }
// // }

// // let sum = 0 ;
// // for(let i = 0 ; i < 1000000000000000000 ; i++) {
// //     sum += i ;
// // }
// // console.log(sum)

// // function sum(num1 , num2 , func) {
// //     func(num1 + num2)
// // }

// // function display(data) {
// //     console.log("The output is " + data);
// // }

// // sum(100 , 200 , display) ;

// function greet() {
//   console.log("hello");
// }

// setInterval(() => {
//   greet();
// }, 1 * 1000);


function sqaure(n){
    return n* n ;
}

function cube(n){
    return n* n *n ;
}

function sumOfSomething(a , b , callback) {
    
    const val1 = callback(a) ; 
    const val2 = callback(b) ; 

    return val1 + val2 ;
}

const ans = sumOfSomething(3 , 4 , sqaure);
console.log(ans) ;