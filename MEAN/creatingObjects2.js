// function VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed){
//   this.name = name;
//   this.numberOfWheels = numberOfWheels;
//   this.numberOfPassengers = numberOfPassengers;
//   this.makeNoise = function () {
//   }
//   this.speed = speed;
//   var distance_travelled = 0;
//   this.updateDistanceTravelled = function () {
//     distance_travelled += speed;
//   }
//   this.move = function () {
//     this.updateDistanceTravelled ();
//     this.makeNoise ();
//   }
//   this.checkMiles = function () {
//     console.log(distance_travelled);
//   }
// }

Class Vehicle {
  Constructor(name, numberOfWheels, numberOfPassengers, speed){
  this.name = name;
  this.numberOfWheels = numberOfWheels;
  this.numberOfPassengers = numberOfPassengers;
  this.makeNoise = function () {
  }
this.speed = speed;
  var distance_travelled = 0;
  this.updateDistanceTravelled = function () {
    distance_travelled += speed;
  }
  this.move = function () {
    this.updateDistanceTravelled ();
    this.makeNoise ();
  }
  this.checkMiles = function () {
    console.log(distance_travelled);
  }
}

var Bike = new VehicleConstructor("bike", 2, 1, 2);
Bike.makeNoise = function () {
  console.log("ring ring!")
}
Bike.makeNoise ();
var Sedan = new VehicleConstructor("sedan", 4, 5, 80);
Sedan.makeNoise = function () {
  console.log("Honk Honk!")
}
Sedan.makeNoise ();
var Bus = new VehicleConstructor("bus", 4, 16, 60);
Bus.passengerCount = function (numberToPick) {
  this.numberOfPassengers += numberToPick
  console.log(Bus.numberOfPassengers)
}
Bus.passengerCount (2);
