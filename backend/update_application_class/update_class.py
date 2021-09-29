import pandas as pd
import datetime

df = pd.read_csv(r"<location of csv>")
for row in df.iterrows():
    d1 = datetime.datetime.strptime(row['date'], "%Y-%m-%d")
    d2 = datetime.date.today()
    if (abs((d2 - d1).days) == 0) and (row['class'] == 3):
        row['class'] = 2
df.to_csv(r"<location of csv>")

