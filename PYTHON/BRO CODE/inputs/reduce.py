
import functools

letters = ["H", "E", "L", "L", "O"]

word = functools.reduce(lambda a, b: a + b, letters)
print(word)