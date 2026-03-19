# students = ("Squidward", "Sandy", "Patrick", "Spongebob", "Mr. Krabs")
#
# # students.sort(reverse=True) # Para trabajar con arrays
# sorted_students = sorted(students, reverse=True)
#
#
# for student in sorted_students:
#     print(student)

students = [
    ("Squidward", "F", 60),
    ("Sandy", "A", 33),
    ("Patrick", "D", 36),
    ("Spongebob", "B", 20),
    ("Mr. Krabs", "C", 78)
]

grade = lambda grades:grades[2]
students.sort(key=grade, reverse=True)

for student in students:
    print(student)

print()