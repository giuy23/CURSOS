
import threading
import time

def eat_breakfast():
    time.sleep(3)
    print("You eat breakfast")

def drink_cofee():
    time.sleep(4)
    print("You drink cofee")

def study():
    time.sleep(5)
    print("You finish studying")

x = threading.Thread(target=eat_breakfast, args=())
x.start()

y = threading.Thread(target=drink_cofee, args=())
y.start()

z = threading.Thread(target=study, args=())
z.start()


# eat_breakfast()
# drink_cofee()
# study()