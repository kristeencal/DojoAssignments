function VehicleConstructor(name, numberOfWheels, numberOfPassengers){
  var vehicle = {};
  vehicle.name = name;
  vehicle.numberOfWheels = numberOfWheels;
  vehicle.numberOfPassengers = numberOfPassengers;
  vehicle.makeNoise = function () {
  }
  return vehicle;
}
var Bike = VehicleConstructor("bike", 2, 1);
Bike.makeNoise = function () {
  console.log("ring ring!")
}
Bike.makeNoise ();
var Sedan = VehicleConstructor("sedan", 4, 5);
Sedan.makeNoise = function () {
  console.log("Honk Honk!")
}
Sedan.makeNoise ();
var Bus = VehicleConstructor("bus", 4, 16);
Bus.passengerCount = function (numberToPick) {
  this.numberOfPassengers += numberToPick
  console.log(Bus.numberOfPassengers)
}
Bus.passengerCount (2);
