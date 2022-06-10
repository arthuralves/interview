# Data Exercise

The purpose of this exercise is to show compentency with exploring data and manipulating data structures.

Please complete this exercise with either Python or Javascript. A notebook (Jupyter or Observable) are both great options. Please avoid using Pandas. Vanilla Python/Javascript is preferred.

Prompt:
One of our clients, Discount Astronaut Store, is selling an Astronaut Suit, and we need to massage their product data to use in our systems so we can make recommendations for their astronaut customers.

Please complete the following and submit your work:

1. Load the data file into memory.
2. Create an empty object with a 'products' key, and assign an empty array as it's value.
3. Each product contains a list of variants. These are variations on a given product (e.g. Astronaut Suit, Blue, and XL). For each variant in your loaded dataset, generate a flat object that includes the following:

- variant id
- product title + variant title (combined)
- price
- inventory count
- description
- color

*Choose your own key names that are appropriate for the values assigned. Some of these values may come from the top level product.

1. Estimate the potential sales for each variant by multiplying price by inventory. Add a key to each variant object called 'potential_sales'.
2. Calculate the combined potential sales for all variants, and store the value at the top level of your object under the key 'potential_sales_total'.
3. Split variants between variants that have inventory and variants that don't have inventory. Save the variants with inventory in an array under the key 'in_stock_products', and save the variants with no inventory in an array under the key 'out_of_stock_products'.
4. Push each newly created variant object to your new 'products' array created in step 1.
