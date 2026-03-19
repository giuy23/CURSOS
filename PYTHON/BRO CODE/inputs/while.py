import random

i = True
while i:
    print("You are in a loop!")
    i = random.randint(1, 100) % 2 == 0