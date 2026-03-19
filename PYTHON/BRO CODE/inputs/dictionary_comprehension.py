cities_in_f = {'New York': 32, 'Boston': 75, 'Los angeles': 100, 'Chicago': 50}

cities_in_C = {key: round((value - 32)* (5/9)) for (key, value) in cities_in_f.items()}
print(cities_in_C)