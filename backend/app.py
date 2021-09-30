from flask import Flask, jsonify, request;
from flask_cors import CORS, cross_origin;
from selenium import webdriver;
from bs4 import BeautifulSoup;
from webdriver_manager.chrome import ChromeDriverManager;
import pandas as pd
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

@app.route("/seach")
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
if __name__ == "__main__":
    app.run()