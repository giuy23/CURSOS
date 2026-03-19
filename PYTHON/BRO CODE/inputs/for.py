import time

# for i in range(10):
#     print(i + 1)

#for i in range(50,1001, 5):
#    print(i)

#for i in ("name", "age", "gender"):
#    print(i)

#for seconds in range(10, 0, -1):
#    print(seconds)
#    time.sleep(1)

rows = int(input("How many rows?: "))
columns = int(input("How many columns?:"))
symbol = input("Enter a symbol to use: ")

for i in range(rows):
    for j in range(columns):
        print(symbol, end="")
    print()