var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
console.log(x);

var x = [3,5,"Dojo", "rocks", "Michael", "Sensei", "Amy"]
for (var i=0; i <x.length; i++) {
  console.log(x[i]);
}
x.push(100);
console.log(x);

x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);

// var sum = 0;
// for (i=1; i<=500; i++) {
//   sum += i;
//   console.log(sum);
// }

var Array = [1,5,90,25,-3,0];
var min = Array[0];
for (i=0; i<Array.length; i++) {
  if(Array[i]<min) {
    min = Array[i];
    console.log(min);
  }
}

var sum = 0;
for (var i=0; i< Array.length; i++) {
  sum += Array[i];
}
var avg = sum/Array.length;
console.log(avg);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (key in newNinja) {
  console.log(key, newNinja[key]);
}
