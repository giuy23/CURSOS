class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width


class Square(Rectangle):

    def __init__(self, length, width):
        super().__init__(length, width)

    def area(self):
        return self.length * self.width

class Cube(Rectangle):

    def __init__(self, length, width, height):
        super().__init__(length, width)
        self.height = height

    def volumen(self):
        return self.length * self.width * self.height


square = Square(5, 5)
cube = Cube(5, 5, 3)

print(square.area())
print(cube.volumen())
