def hello(**kwargs):
    print("Hello", end=" ")

    for key, value in kwargs.items():
        print(value, end=" ")

hello(middle="Code", last="Dude", first="Bro")