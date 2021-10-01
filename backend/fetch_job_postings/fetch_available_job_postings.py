"""
This module fetches and scrapes the google search results for available job postings based on the
keywords entered
"""
import os.path
from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd


keywords = input("Enter keywords:")
keywords = keywords.replace(' ', '+')
url = "https://www.google.com/search?q=" + keywords + "&ibp=htl;jobs"
print(url)
driver = webdriver.Chrome(os.path.realpath(r"..\..\resources\chromedriver"))

driver.get(url)
content = driver.page_source
soup = BeautifulSoup(content)

df = pd.DataFrame(columns=["Job Title", "Company", "Location"])
mydivs = soup.find_all("div", {"class": "PwjeAc"})
for i, div in enumerate(mydivs):
    df.at[i, "Job Title"] = div.find("div", {"class": "BjJfJf PUpOsf"}).text
    df.at[i, "Company"] = div.find("div", {"class": "vNEEBe"}).text
    df.at[i, "Location"] = div.find("div", {"class": "Qk80Jf"}).text
driver.close()
