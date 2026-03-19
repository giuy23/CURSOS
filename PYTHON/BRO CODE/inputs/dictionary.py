
capitals = {
    "USA": "Washington",
    "India": "New Dehli",
    "China": "Beijing",
    "Russia": "Moscow"
}

capitals.update({"USA": "Washington DC"})

print(capitals.get("Omán"))
print(capitals.keys())
print(capitals.items())

for key, value in capitals.items():
    print(key, value)