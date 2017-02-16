class Bike(object):
    def __init__(self, price, max_speed):

        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print (self.price, self.max_speed, self.miles)

    def ride(self):
        self.miles += 10
        print "Riding" + str(self.miles)

    def reverse(self):
        self.miles -= 5

        if self.miles >= 0:
            print "Reversing" + str(self.miles)
        else:
            return


vespa = Bike(800, 80)
tandem = Bike(500, 30)

vespa.ride()
vespa.ride()
vespa.ride()
vespa.reverse()
vespa.displayInfo()

tandem.ride()
tandem.ride()
tandem.reverse()
tandem.reverse()
tandem.displayInfo()
