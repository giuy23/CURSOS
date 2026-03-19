class Car:
    color = None

class Motorcycle:
    color = None

def change_color(vehicle, color):
    vehicle.color = color

Car_1 = Car()
Car_2 = Car()
Car_3 = Car()

bike_1 = Motorcycle()

change_color(Car_1, 'red')
change_color(Car_2, 'white')
change_color(Car_3, 'blue')
change_color(bike_1, 'yellow')


print(Car_1.color)
print(Car_2.color)
print(Car_3.color)
print(bike_1.color)