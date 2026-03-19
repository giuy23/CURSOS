import os

path: str = "D:\\DELETE\\authentication.txt"

if os.path.exists(path):
    print("The file {} exists".format(path))
else:
    print("The location doesn't exist")