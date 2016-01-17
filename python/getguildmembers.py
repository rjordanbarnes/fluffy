import json
import time
import logging
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

logging.basicConfig(filename="logs/getguildmembers.log", level=logging.INFO)

with open("../public_html/json/guildmembers.json", "w") as outputfile:
    print(time.strftime("%b %d %Y %I:%M %p") +
          " - Pushing guild member data to JSON")
    logging.info(time.strftime("%b %d %Y %I:%M %p") +
                 " - Pushing guild member data to JSON")
    json.dump(data, outputfile)
