"""
Purpose of this file was to extract wind farm locations that are in tuulivoimapuistot.csv
Data: https://fi.wikipedia.org/wiki/Luettelo_Suomen_tuulivoimaloista
"""

file = open("tuulivoimapuistot.csv", "r")

result = []
i = 0
for row in file:
    if i != 0:
        row = row.strip("\n")
        parts = row.split(";")
        location = parts[1]
        parts2 = location.split("°N,\xa0")
        result.append(parts2)
    i += 1

for i in range(0, len(result)):
    result[i][1] = float(result[i][1].split("°")[0])
    result[i][0] = float(result[i][0])
    
    tmp = result[i][0]
    result[i][0] = result[i][1]
    result[i][1] = tmp

print(f"tuulivoimapuistot = {result}")
