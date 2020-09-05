"""
test = "testing "

print(test[2])

print(test.casefold())

print(test.capitalize())

print(test.isalnum())

print(len(test))

print(test.expandtabs(10))

print(test.isspace())

print(test.__sizeof__())

print(test.format_map(2))

print(test.isupper())

print(test.rsplit(2))

"""
# Print each character of string
username = "Laxmikant"

# first way of printing characters
print(username)
for char in username:
    print(char)

# second way of printing characters
for i in range(len(username)):
    print(username[i])

# third way of printing characters
i=0
while i <len(username):
    print(username[i])
    i = i + 1

# Print each character of string in reverse order

# first way of printing characters in reverse
print(username[::-1])
for char in username[::-1]:
    print(char)

# second way of printing characters in reverse
i=len(username) -1
while i >= 0:
    print(username[i])
    i = i - 1

# Third way of printing characters in reverse

for i in range(len(username)-1, -1, -1):
   print(i)
   print(username[i])

# Replace firstname with last name

fullName = "Laxmikant Mehetre"
print(fullName.replace("Laxmikant","Mehetre"))

fullName = "Laxmikant Mehetre"
for char in fullName.replace("Laxmikant","Mehetre"):
    print(char)

