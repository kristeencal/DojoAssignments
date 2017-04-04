// console.log('I am running from node');
// console.log('I ran from node');
//
// var myunknown = 'hello';
// console.log(typeof(myunknown));
//
// // What happens if you do the following?
// console.log(a);
// var a = "weird";
// // Will it throw an error?  What will it print, if it doesn't throw an error?
// // How about this?
// console.log(typeof(b));
// var b = "weird too";
// console.log(typeof(b));
//
// var empty_array = [ ];             // create empty array with square brackets  (creates a bureau of drawers)
// var string_array = [ "hi", "these", "are", "strings" ];
// var x = 15;                       // you can log these vars in the console (even a whole array)
// console.log("Logging variables to the console", empty_array, string_array, x);
//                                   // use square brackets again(e.g. string_array[1])  to access values in the array (to open a specific drawer in the bureau)
// console.log('2nd value of string_array', string_array[1]);
//                                    // get the length of the array
// console.log('string_array has a length of', string_array.length);
// string_array.push('awesome');      // adding a new value to the array
// console.log(string_array);         // you'll note that string_array now has a new value called awesome
// string_array.pop();                // removing the last value in the array
// console.log(string_array);         // the last value in the array is now gone!
//
// var arr = [3, 6];
// arr[234] = "hi";
// //
// console.log( arr.length ); // 235
// console.log( arr[34] ); // undefined

var arr = [3, 6];
arr[234] = "hi";
//
console.log( arr.length ); // 235
console.log( arr[34] ); // undefined
arr.length = 3;
console.log( arr[34] );
console.log( arr[234] );
console.log( arr.length );
arr.length = 500;
console.log( arr[234] );
console.log( arr.length );

function myFunctionName(firstParameter, secondParameter){
  var myProduct = firstParameter * secondParameter;
  return myProduct;
}
myFunctionName(5,14);
var firstParameter = 5;
var secondParameter = 14;

var theProductOfFiveAndFourteen = myFunctionName(5,14);

var x = 15;
if ( x < 10 ) {
   console.log("x is less than 10");
} else if ( x < 20 ) {
   console.log("x is less than 20");
} else {
   console.log("x is greater than 20!");
}

function countDown(number){
  while(number > 0){
    console.log(number);
    number --;
  }
}
countDown(10);

var ninja = {
  name:'Susanna',
  MEAN_belt:10,
  iOS_belt:10,
  python_belt:10,
  php_belt:9, // she hadn't mastered deploying yet!
  ruby_belt:9.75 // done in 1.5 hrs though!
}
for (var key in ninja) {
  if (ninja.hasOwnProperty(key)) {
    console.log(key);
    console.log(ninja[key]);
  }
}
