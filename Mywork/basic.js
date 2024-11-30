// // // let str = 'Bhavneet';
// // // console.log(str.length);
// // // console.log(str.indexOf('e'));

// // // function trimString(str) {
// // //     console.log("Original String:", str);
// // //     console.log("After trim:", str.trim());
// // //   }
// // //   trimString(" Hello World ");

// // // function explainParseInt(value) {
// // //     console.log("Original Value:", value);
// // //     let result = parseInt(value);
// // //     console.log("After parseInt:", result);
// // //   }

// // //   // Example Usage for parseInt
// // //   explainParseInt("42");
// // //   explainParseInt("42px");
// // //   explainParseInt("3.14");

// // //   function explainParseFloat(value) {
// // //     console.log("Original Value:", value);
// // //     let result = parseFloat(value);
// // //     console.log("After parseFloat:", result);
// // //   }

// // //   // Example Usage for parseFloat
// // //   explainParseFloat("3.14");
// // //   explainParseFloat("42");
// // //   explainParseFloat("42px");

// // // function pushExample(arr, element) {
// // //     console.log("Original Array:", arr);

// // //     arr.push(element);
// // //     console.log("After push:", arr);
// // //   }
// // //   pushExample([1, 2, 3], 4);

// // // function popExample(arr) {
// // //     console.log("Original Array:", arr);

// // //     arr.pop();
// // //     console.log("After pop:", arr);
// // //   }
// // //   popExample([1, 2, 3]);

// // // function shiftExample(arr) {
// // //     console.log("Original Array:", arr);

// // //     arr.shift();
// // //     console.log("After shift:", arr);
// // //   }
// // //   shiftExample([1, 2, 3]);

// // //   function unshiftExample(arr, element) {
// // //     console.log("Original Array:", arr);

// // //     arr.unshift(element);
// // //     console.log("After unshift:", arr);
// // //   }
// // //   unshiftExample([1, 2, 3], 0);

// // // function forEachExample(arr) {
// // //     console.log("Original Array:", arr);

// // //     arr.forEach(function (item, inx) {
// // //       console.log(index, item); // Correct order: item first, then index
// // //     });
// // //   }

// // //   forEachExample([1, 2, 3]);

// // // function mapExample(arr) {
// // //     console.log("Original Array:", arr);

// // //     let newArr = arr.map(function(item) {
// // //       return item * 2;
// // //     });
// // //     console.log("After map:", newArr);
// // //   }
// // //   mapExample([1, 2, 3]);

// // //   const arr  = [1 , 2, 3] ;

// // // arr.forEach(element => {
// // //    console.log(element)
// // //   });

// // // function log() {
// // //   console.log("hello from the log");
// // // }

// // // function hello(fun) {
// // //   fun()
// // //   console.log("hello this ")
// // // }

// // // hello(log)

// // // const date = new Date() ;
// // // console.log(date.getDate())
// // // console.log(date.getFullYear());

// // // Read a file, remove all the extra spaces and write it back to the same file.

// // // For example, if the file input was
// // // ```
// // // hello     world    my    name   is       raman
// // // ```

// // // After the program runs, the output should be

// // // ```
// // // hello world my name is raman

// // const fs = require('fs');

// // let fileData = "";
// // fs.readFile('a.txt', 'utf-8', (err, data) => {
// //     if (err) {
// //         console.error("Error reading file:", err);
// //         return;
// //     }
// //     console.log(data);
// //     fileData = data.replace(/\s/g , '');

// //     // Write the data to another file
// //     fs.writeFile('a.txt', fileData, (err) => {
// //         if (err) {
// //             console.error("Error writing file:", err);
// //             return;
// //         }
// //         console.log("File has been written successfully.");
// //     });
// // });

// function waitFor( time) {
//     setTimeout(() => {
//         console.log("after run ")

//     }, time);
// }

// waitFor(1000) ;
// console.log("hello")

function mypromise(duration) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

const ans = mypromise(1000) ; 
ans.then(function(){
    console.log("Done")
})
