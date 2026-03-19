class Animal():
    def eat(self):
        print("This animal eat")

class Rabbit(Animal):
    def eat(self):
        print("This rabbit eat")

rabbit = Rabbit()
rabbit.eat()
Animal.eat(rabbit)

# class Animal:
#     species = "Generic Animal"
#
#     @classmethod
#     def get_species(cls):
#         print(f"This species is: {cls.species}")
#
# Animal.get_species()   # No necesitas crear un objeto

