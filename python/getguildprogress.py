import requests
import re
import json
import time
import os
import logging

WOWPROGRESSURL = "http://www.wowprogress.com/guild/us/darkspear/Fluffy+Kitties"

htmlFile = requests.get(WOWPROGRESSURL)
htmlText = htmlFile.text

# Use regex to find progress info and put into progress variable
regex = 'class="innerLink ratingProgress".*<b>(\d+)'
pattern = re.compile(regex)
progress = re.findall(pattern, htmlText)

# Create JSON data and push it to guilddata.json
data = {}
data['progress'] = progress[0]

logging.basicConfig(filename="/var/www/html/python/logs/getguildprogress.log", level=logging.INFO)

with open("/var/www/html/json/guildprogress.json", "w") as outfile:
    # print(time.strftime("%b %d %Y %I:%M %p") +
    #       " - Refreshing progress... Now " +
    #       progress[0] + "/13")
    logging.info(time.strftime("%b %d %Y %I:%M %p") + " - Refreshing progress... Now " + progress[0] + "/13")
    json.dump(data, outfile)
