import json
import time
import csv

# Create arrays that contain an object with guild openings
# and push it to their respective JSON files.
mythicopeningsarray = []
heroicopeningsarray = []

with open('../openings-mythic.csv', newline='', encoding="utf-8-sig") as inputfile:
    mythicopenings = csv.reader(inputfile)
    for classopening in mythicopenings:
        mythicopeningsarray.append({'classname': classopening[0],
                                    'status': classopening[1]})

with open('../openings-heroic.csv', newline='', encoding="utf-8-sig") as inputfile:
    heroicopenings = csv.reader(inputfile)
    for classopening in heroicopenings:
        heroicopeningsarray.append({'classname': classopening[0],
                                    'status': classopening[1]})

data = {}
data['openings'] = mythicopeningsarray


with open("../public_html/json/openings-mythic.json", "w") as outputfile:
    print(time.strftime("%b %d %Y %I:%M %p") +
          " - Pushing Mythic openings to JSON")
    json.dump(data, outputfile)

data['openings'] = heroicopeningsarray

with open("../public_html/json/openings-heroic.json", "w") as outputfile:
    print(time.strftime("%b %d %Y %I:%M %p") +
          " - Pushing Heroic openings to JSON")
    json.dump(data, outputfile)
