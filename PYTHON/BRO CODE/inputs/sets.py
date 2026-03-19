
utensils = {"fork", "spoon", "knife"}
dishes = {"bowl", "plate", "cup"}
# utensils.add("napkin")
# utensils.remove("fork")
# utensils.clear()
utensils.update(dishes)
for x in utensils:
    print(x)

print(utensils)