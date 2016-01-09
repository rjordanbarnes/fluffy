import json
import sys
import time
import logging

# Open guildroster.csv and split it
guildrosterfile = open("/var/www/html/guildroster.txt", encoding="utf-8-sig")
guildroster = guildrosterfile.read().split("\n")
guildrosterarray = []

# Create an object for every line of guildroster.txt
for guildmember in guildroster:
    membervariables = guildmember.split("|")
    guildrosterarray.append({'name': membervariables[0],
                             'specname': membervariables[1],
                             'classname': membervariables[2],
                             'description': membervariables[3]})

# Create array of guild member objects and push it to guildmembers.json
data = {}
data['members'] = guildrosterarray

logging.basicConfig(filename="/var/www/html/python/logs/getguildmembers.log", level=logging.INFO)

with open("/var/www/html/json/guildmembers.json", "w") as outfile:
    logging.info(time.strftime("%b %d %Y %I:%M %p") + " - Pushing guild member data to JSON")
    json.dump(data, outfile)
