def add(*xd):
    sum = 0
    xd = list(xd)
    xd[3] = xd[3] + xd[5]

    for x in xd:
        sum += x
    return sum

print(add(1, 2, 3, 4, 5, 8, 10))