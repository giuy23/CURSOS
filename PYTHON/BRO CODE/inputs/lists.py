from idlelib.replace import replace

# food = ["pizza", "Hamburger", "Hot Dog", "spaghetti", "pudding"]
# food.append("cheese")
#
# print(food[-1])
#
# for i in food:
#     print(i)

drinks = ["coffee", "soda", "tea"]
dinner = ["pizza", "hamburger", "hotdog"]
dessert = ["cake", "ice cream"]

food = [drinks, dinner, dessert]

for i in food[0]:
    print(i, end="\t")

print(food[0][0])