class Animal:
    alive = True

    def eat(self):
        print('Animal is eating')

    def sleep(self):
        print('Animal is sleeping')


class Rabbit(Animal):

    def run(self):
        print('This rabbit is running')

    pass


class Fish(Animal):

    def swin(self):
        print('This fish is swimming')

    pass


class Hawk(Animal):

    def fly(self):
        print("This hawk is flying")

    pass


rabbit = Rabbit()
fish = Fish()
hawk = Hawk()

print(rabbit.alive)
fish.swin()
hawk.fly()
rabbit.run()
