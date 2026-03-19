# try:
#     with open('D:\\DELETE\\xd.txt') as file:
#         print(file.read())
# except FileNotFoundError:
#     print("That file was not found")



# text = "YOOOOOOOOOO\nThis is amazing!\nNice day."
#
# with open('D:\\DELETE\\xd.txt', 'a') as file:
#     file.write(text)



import  shutil

shutil.copy2('D:\\DELETE\\xd.txt', 'D:\\DELETE\\copy.txt')