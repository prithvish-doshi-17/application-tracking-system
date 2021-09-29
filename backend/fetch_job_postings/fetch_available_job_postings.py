from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd
from webdriver_manager.chrome import ChromeDriverManager


keywords = input("Enter keywords:")
keywords = keywords.replace(' ', '+')
url = "https://www.google.com/search?q=" + keywords + "&ibp=htl;jobs"
print(url)
driver = webdriver.Chrome(ChromeDriverManager().install())

driver.get(url)
content = driver.page_source
soup = BeautifulSoup(content)

df = pd.DataFrame(columns=["Job Title", "Company", "Location"])
mydivs = soup.find_all("div", {"class": "PwjeAc"})
for i, div in enumerate(mydivs):
    df.at[i, "Job Title"] = div.find("div", {"class": "BjJfJf PUpOsf"}).text
    df.at[i, "Company"] = div.find("div", {"class": "vNEEBe"}).text
    df.at[i, "Location"] = div.find("div", {"class": "Qk80Jf"}).text
print(df)
