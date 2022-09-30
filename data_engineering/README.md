Welcome to <em>Spacesuit & Co.</em>, the hottest Space Suit fashion brand outfitting astronauts since 2022! 
Our suits are highest-end, super air-tight variety, and are very expensive 🚀 🧑‍🚀 💸

We need to learn more about our astronaut customers who are pretty picky when it comes to spacesuit fit. The better we understand their behavior, the better we can do to fit them in the right spacesuit.

You'll find a sqlite database in this directory which contains two tables, described below. A frontend application is used to provide our astronaut customers with their spacesuit recommendations, and the data collected from this application is focused around customer usage of the application.

You’ll find the same data in csv format, which can be used for the Python/Pandas questions.

The `purchase_return` table contains purchase orders and return data for users that have made a purchase Spacesuit & Co. purchase.
The `telemetry` table contains usage data from our application.

### The assignment

Imagine yourself to be a Data Engineer at Bold Metrics. We have received the `purchase_return.csv` and `telemetry.csv` raw data in excel and it must be ingested into the DWH so that our Data Analysts can perform analysis and create reports on the back of this.

_This is a 'walk-through' assignment; Please take and talk us through your actions, thoughts and assumptions as you answer the questions below. This task is designed for you to show us how you work with and approach (raw) data, while simultaneously for us to get an understanding of your interpretation of the data as well as your handling of a raw data set. Throughout the SQL and Python tasks, make sure to mention any potential limitations or other things that stand out in the data that you think could be relevant._

The goal is to finish the tasks below in the coming hour and you may start with either the SQL or Python. Feel free to ask us questions if anything is unclear ;) Good luck!

Please use SQL for the following questions:

    1. How many space suits where sold?
    2. Find the average age both for astronauts who purchased and kept their items and astronauts who returned.
    3. For the product with the most purchases, which size was returned the most? How many times was that size returned?


Please use Python & Pandas for the following questions:

    1. Load both csv files (as dataframes, if using Pandas), and join the tables together on transaction_id and date.
    2. Find the number of space_suit’s purchased between October 31st and November 31st.
    3. Using Python, write logic to clean the height column in the telemetry data.
