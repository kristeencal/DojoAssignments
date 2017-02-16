class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print (self.price, self.max_speed, self.miles)
        return self

    def ride(self):
        self.miles += 10
        print "Riding" + str(self.miles)
        return self

    def reverse(self):
        self.miles -= 5
        return self

        if self.miles >= 0:
            print "Reversing" + str(self.miles)
        else:
            return


vespa = Bike(800, 80)
tandem = Bike(500, 30)

vespa.ride().ride().ride().reverse().displayInfo()

tandem.ride().ride().reverse().reverse().displayInfo()
