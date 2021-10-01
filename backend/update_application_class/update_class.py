import os
import pandas as pd
import datetime
pd.set_option('display.max_columns', None)
df = pd.read_csv(os.path.realpath(r"../data/applications.csv"), header=0)
for index, row in df.iterrows():
    d1 = datetime.datetime.strptime(row['date'], "%Y-%m-%d")
    d2 = datetime.datetime.today()
    if (d2 - d1).days >= 0 and (row['class'] == 3):
        df.at[index, 'class'] = 2
df.to_csv(os.path.realpath(r"../data/applications.csv"), index=False)

