import os

source = "text.txt"
destination = "D:\\DELETE\\xd.txt"

try:
    if os.path.exists(destination):
        print("There is already a file there")
    else:
        os.replace(source, destination)
        print("The file has been moved")
except FileNotFoundError:
    print(source, " was not found")