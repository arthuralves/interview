Welcome to <em>Spacesuit & Co.</em>, the hottest Space Suit fashion brand outfitting astronauts since 2022! 
Our suits are highest-end, super air-tight variety, and are very expensive 🚀 🧑‍🚀 💸

We need to learn more about our astronaut customers who are pretty picky when it comes to spacesuit fit. The better we understand their behavior, the better we can do to fit them in the right spacesuit.

You'll find a sqlite database in this directory which contains two tables, described below. A frontend application is used to provide our astronaut customers with their spacesuit recommendations, and the data collected from this application is focused around customer usage of the application.

You’ll find the same data in csv format, which can be used for the Python/Pandas questions.

The `telemetry` table contains usage data from our application.
The `purchase_return` table contains purchase and return data for those same users. 

Please use SQL for the following questions:

    1. How many space suits where sold?
    2. Find the average age both for astronauts who purchased and kept their items and astronauts who returned.
    3. For the product with the most purchases, which size was returned the most? How many times was that size returned?
    4. For the product with the most purchases, find the return rate for astronauts who closed the application.

Please use Python & Pandas for the following questions:

    1. Load both csv files (as dataframes, if using Pandas), and join the tables together on transaction_id and date.
    2. Find the number of space_suit’s purchased between October 31st and November 31st.
    3. Using Python, write logic to clean the height column in the telemetry data.

Using either Pandas or SQL, find two additional insights of interest in the data and show how you arrived at an answer.

Please turn in a Jupyter notebook for the Pandas & Python questions, and a .txt containing the SQL queries used to answer the SQL questions.

Good luck!