class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage

        if self.price > 100000:
            self.tax = 0.15

        else:
            self.tax = 0.12

    def display_all(self):

        return str(self.price) + " " + self.speed + " " + self.fuel + " " + self.mileage + " " + str(self.tax)

mustang = Car(20000, "90mph","not full", "7mpg")
jaguar = Car(40000, "60mph", "full", "30mpg")
lambo = Car(70000, "120mph", "full", "5mpg")
porsche = Car(50000, "100mph", "kind of full", "6mpg")
miata = Car(20000, "80mph", "full", "10mpg")
convertible = Car(10000, "75mph", "kind of full", "15mpg")

print mustang.display_all()
print jaguar.display_all()
print lambo.display_all()
print porsche.display_all()
print miata.display_all()
print convertible.display_all()
