import requests
import re
import json
import time

WOWPROGRESSURL = "http://www.wowprogress.com/guild/us/darkspear/Fluffy+Kitties"

htmlFile = requests.get(WOWPROGRESSURL)
htmlText = htmlFile.text

# Use regex to find progress info and put into progress variable. Comes from website formatted like '6/7 (H)'
progressInfoRegex = 'class="innerLink ratingProgress" .*">\s?(\d+\/\d+\s?\(.\))'
pattern = re.compile(progressInfoRegex)
progress = re.findall(pattern, htmlText)
progress = progress[0]

# Use regex to strip out parentheses and space in progress
progress = re.sub('[\s()]', '', progress)
print(progress)

# Create JSON data and push it to guilddata.json
data = {}
data['progress'] = progress


with open("../public_html/json/guildprogress.json", "w") as outputfile:
    print(time.strftime("%b %d %Y %I:%M %p") +
          " - Refreshing progress... Now " + progress)
    json.dump(data, outputfile)
