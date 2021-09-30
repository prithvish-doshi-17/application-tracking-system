from flask import Flask, jsonify, request;
from flask_cors import CORS, cross_origin;
from selenium import webdriver;
from bs4 import BeautifulSoup;
from itertools import islice
from webdriver_manager.chrome import ChromeDriverManager;
import pandas as pd
import json
import csv
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
@cross_origin()
def hello():
    name = request.args.get('name')
    print(name)
    obj = {
        "str": "Hello World!"+name
    }
    return jsonify(obj)

@app.route("/search")
def search():
    keywords = request.args.get('keywords')
    keywords = keywords.replace(' ', '+')
    url = "https://www.google.com/search?q=" + keywords + "&ibp=htl;jobs"
    driver = webdriver.Chrome(ChromeDriverManager().install())

    driver.get(url)
    content = driver.page_source
    driver.close()
    soup = BeautifulSoup(content)

    df = pd.DataFrame(columns=["jobTitle", "companyName", "location"])
    mydivs = soup.find_all("div", {"class": "PwjeAc"})
    for i, div in enumerate(mydivs):
        df.at[i, "jobTitle"] = div.find("div", {"class": "BjJfJf PUpOsf"}).text
        df.at[i, "companyName"] = div.find("div", {"class": "vNEEBe"}).text
        df.at[i, "location"] = div.find("div", {"class": "Qk80Jf"}).text
    return jsonify(df.to_dict('records'))

@app.route("/application", methods=['GET'])
def getDataFromCSV():
    path = "./data/applications.csv"
    try:
        f = open(path, 'r',  encoding='utf-8')
        rows = csv.reader(f)
        result = []
        for row in islice(rows, 1, None):
            dic = {}
            dic['jobTitle'] = row[0]
            dic['companyName'] = row[1]
            dic['date'] = row[2]
            dic['class'] = row[3]
            dic['id'] = row[4]
            result.append(dic)
        json_str = json.dumps(result)
        return json_str
    except:
        print('ERROR: can not found ' + path)
        exit(1)
        
@app.route("/application", methods=['POST'])
def editcsv():
    path = "./data/applications.csv"
    csvTitle = ['jobTitle', 'companyName', 'date', 'class', 'id']
    application = request.get_json()['application']
    newLine = []
    for t in csvTitle:
        newLine.append(application[t] if t in application else None)

    try:
        with open(path, 'a+', encoding='utf-8') as f:
            writer = csv.writer(f, delimiter=',')
            writer.writerow(newLine)
    except:
        print('ERROR: can not found ' + path)
        exit(1)
    return jsonify('Create an application succeddfully!')

@app.route("/getNewId", methods=['GET'])
def getNewId():
    path = "./data/applications.csv"
    try:
        f = open(path, 'r',  encoding='utf-8')
        rows = csv.reader(f)
        i = 0
        for row in islice(rows, 1, None):
            i += 1
        return jsonify(i)
    except:
        print('ERROR: can not found ' + path)
        exit(1)

if __name__ == "__main__":
    app.run()