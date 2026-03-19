from abc import ABC, abstractmethod


class Vehicle(ABC):

    @abstractmethod
    def go(self):
        pass

    @abstractmethod
    def stop(self):
        pass


class Car(Vehicle):

    def go(self):
        print("You drive the car")

    def stop(self):
        print("You car is stopped")


class Motorcycle(Vehicle):

    def go(self):
        print("You drive the motorcycle")

    def stop(self):
        print("You motorcycle is stopped")


# vehicle = Vehicle()
car = Car()
motorcycle = Motorcycle()

Vehicle.go('xd')
car.go()
motorcycle.go()

car.stop()
motorcycle.stop()