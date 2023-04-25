# Overview

Welcome to <em>Spacesuit & Co.</em>, the hottest Space Suit fashion brand outfitting astronauts since 2022! 
Our suits are of the high-end, super air-tight variety, and are very expensive 🚀 🧑‍🚀 💸

We need to learn more about our astronaut customers who are pretty picky when it comes to spacesuit fit. The better we understand their behavior, the better we can fit them in the right spacesuit.

# Assignment

You're a Data Analyst at Bold Metrics. We need your help with:
1. ingesting the raw data - `data/purchase_return.csv` and `data/user_telemetry.csv`- into our data warehouse and
1. using that data to answer some questions (see below) to help us understand our business better.

# Data

This directory contains two files with data in CSV format. Each CSV contains one table:
* `data/purchase_return.csv`<br>
The `purchase_return` table contains data on purchases and returns for Spacesuit & Co. customers.
* `data/user_telemetry.csv`<br>
The `user_telemetry` table contains usage data from our application.

# Ingesting Data

Before we can write SQL to answer the questions below, we need you to load the data into our data warehouse. Here are some high-level instructions to help you get started.

1. Clone this repo.
1. Download SQLite Tools:<br>
https://www.sqlite.org/download.html
1. Launch SQLite and create a database file:<br>
`sqlite3 spacesuitco.db`
1. Set the mode to CSV:<br>
`.mode csv`
1. Import each CSV:<br>
    * `.import data/purchase_return.csv purchase_return`
    * `.import data/user_telemetry.csv user_telemetry`
1. Verify the imports (i.e., check their schemas to mostly check that they were uploaded correctly):<br>
    * `.schema purchase_return`
        * This should return the following:<br>
        ```CREATE TABLE IF NOT EXISTS "purchase_return"(
"transaction_id" TEXT, "product_id" TEXT, "locale" TEXT, "order_type" TEXT,
 "size" TEXT, "reason_code" TEXT, "price" TEXT, "fit_return_w_empty_reason_code" TEXT,
 "Fit Return" TEXT, "Product Name" TEXT, "Gender" TEXT, "date" TEXT);```
    * `.schema user_telemetry`
        * This should return the following:<br>
        ```CREATE TABLE IF NOT EXISTS "user_telemetry"(
"transaction_id" TEXT, "user_id" TEXT, "client_id" TEXT,
 "size" TEXT, "product_id" TEXT, "date" TEXT, "size_1_id" TEXT,
 "size_2_id" TEXT, "size_3_id" TEXT, "confidence_1" TEXT, "confidence_2" TEXT,
 "confidence_3" TEXT, "is_outlier" TEXT, "prediction_model" TEXT, "height" TEXT,
 "weight" TEXT, "waist" TEXT, "age" TEXT, "bra_band" TEXT,
 "bra_cup" TEXT, "user_action" TEXT);```

 ## SQLite Help and Tips
 
 * SQLite CLI Docs<br>
 https://www.sqlite.org/cli.html
    * You can also save a database to disk like:<br>
    `.save spacesuit.db`
    * You can execute queries - single line and multiline queries - via the CLI (end the statement with a semicolin).
    * You can execute queries saved in a text file with:<br>
    `.read example.sql`

# Questions

For each of the following questions, write <b>one SQL query</b> that will output the answer. The query can include subqueries and/or CTEs if necessary.

Please talk us through your thought process, assumptions, actions, and any questions you may have as you answer the questions below. We'd love to see how you work with and approach data!

1. How many space suits were sold all-time?
1. For our female customers, which products had more than 2,500 purchases? and how many purchases did each of those products have?
1. For the product with the most purchases, which size was returned the most? How many times was that size returned?
1. What is the average age for astronauts who purchased and kept their items?
1. For each product by year and month, what is the a) incremental total number of purchases and b) the running total for the number of purchases? What is the percentage of each month's incremental total of the running total?
    * hint: SQLite doesn't have a date type but how would `SUBSTR(text, start, end)` be useful here?