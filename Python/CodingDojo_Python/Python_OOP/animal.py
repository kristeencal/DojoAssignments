class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = 100
    print "I am an animal"

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayHealth(self):
        print self.name, self.health
        return self

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name, health)
        self.health = 150
    def pet(self):
        self.health += 5
        return self

animal = Animal("animal")
dog = Dog('dog')
animal.walk().walk().walk().run().run().displayHealth()
dog.walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon,self).__init__(name, health)
        self.health = 170

    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "This is a dragon"
        super(Dragon,self).displayHealth(health)

dragon = Dragon("dragon")
dragon.walk().walk().walk().run().run().fly().fly().displayHealth()
