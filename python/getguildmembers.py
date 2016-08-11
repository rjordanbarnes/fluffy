import json
import time
import csv

# Create array of guild member objects and push it to guildmembers.json
guildrosterarray = []

with open('../guildroster.csv', newline='', encoding="utf-8-sig") as inputfile:
    guildroster = csv.reader(inputfile)
    for guildmember in guildroster:
        guildrosterarray.append({'name': guildmember[0],
                                 'specname': guildmember[1],
                                 'classname': guildmember[2],
                                 'description': guildmember[3]})

data = {}
data['members'] = guildrosterarray

with open("../public_html/json/guildmembers.json", "w") as outputfile:
    print(time.strftime("%b %d %Y %I:%M %p") +
          " - Pushing guild member data to JSON")
    json.dump(data, outputfile)
