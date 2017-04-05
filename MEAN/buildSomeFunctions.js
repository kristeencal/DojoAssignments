var run;
function runningLogger () {
  var run = 'I am running!'
  console.log(run);
}
runningLogger ();

var parameter;
function multiplyByTen (parameter) {
  console.log(parameter*10);
}
multiplyByTen (5);

function stringReturnOne () {
  var string1= 'I love coding';
  return string1;
}

function stringReturnTwo () {
  var string2= 'This is getting easier';
  return string2;
}
// 
// function caller (a) {
//   if typeof(a) = function () {
//     a = 'invoked';
//   }
// }
//
// function myDoubleConsoleLog (a,b) {
//   var a = function () {
//     console.log(1);
//   }
//   var b = function () {
//     console.log(2);
//   }
//   if a & b = function () {
//     console.log (a,b);
//   }
// }
//
// function caller2 (a) {
//   var stringy = 'starting';
//   var 2 = 'ending';
//   console.log(stringy);
//   if typeof(a) = function () {
//     a = 'changed';
//   }
//   return ('interesting');
// }
// function caller2(myDoubleConsoleLog);
