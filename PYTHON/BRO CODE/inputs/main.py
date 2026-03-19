name = input("Digit you name please:")
age = input("Digit you age please:")
gender = input("Digit you gender please:")

while not age.isdigit():
    age = input("Please enter your age please:")

age = int(age) + 10

print(f"Your name is {name}, your age is {age}, and your gender is {gender} ")