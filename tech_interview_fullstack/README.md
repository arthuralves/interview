# Takehome Assignment: Garment Matching System

### Objective: Create a full-stack web app, that allows users to find the best size for a selected garment based on their profile.

#### Guidelines: 
- You will have 120 minutes to complete this assignment. 
- Do not spend more than 120 minutes. ***If 120 minutes has passed, please submit what you have completed -- we are more interested in your progress and thought process than the final outcome.***
- Read this entire readme before starting the instructions below, as the entire readme provides guidance and tips on what should be done.

#### Project Structure
This webapp is built in two pieces, our Express server as well as our ReactJS frontend.

##### Server
The server (`server/index.js`) is a simple Express app that has a few endpoints.

1. GET /products - Get the list of products in our product database.
2. GET /profile - Retrieve the user's profile information.
3. PUT /profile - Update the user's profile information.
4. POST /profile - Create the user's profile information.
5. GET /recommendation - Get the recommendation for the best size for the garment based on the user's profile and the available sizes for the product.

The `products` endpoint is already implemented for you. You will need to implement the various `profile` and GET `recommendation` endpoints.

###### External API Service
We've provided you with an external API wrapper that you can use to get the best size recommendation for a garment. The API is a simple REST API that you can use to get the best size recommendation for a garment.

You will call this API using the method `getRecommendation`. 

This API has strict requirements on the format of the request. Our products database has various sizes available for each product, but the external API requires a specific format for the sizes. The recommendations service will error out if the sizes are not in the correct format. Moreover, the external API requires a specific format for the height, weight, age, and waist. That format is also specified below.

- `height`: in inches, as a rounded number
- `weight`: in pounds, as a rounded number
- `age`: in years, as a rounded number
- `waist`: in inches, as a rounded number

You will need to write a function that converts the sizes in our database to the size formats expected from the external API. Additionally, you will need to provide our "best" recommendation for the inputs provided.

##### Client
The client is a React.JS web app built and served by Vite.

We've started building the frontend for you. Your job is to complete the frontend to allow users to:

1. Fill out a form with their profile information. 
    - The user should be able to save their profile.
    - The user should also be able to load their profile from an ID after they save it (the ID should only be persisting in the lifecycle of the server session, no need to store it in a database)
2. Select a product from a dropdown.
3. See the best size recommendation for the product the user selects based on their profile inputs and what we receive from the external API. 

Feel free to add any additional frontend logic you want to make the user experience better.

We've provided you with some starter code to get you started -- they are in various states of completion. You will have to complete the following files:
- src/components/ProfileForm.jsx
- src/components/ProductDropdown.jsx

#### Tips
- If any instructions are unclear, assume the best approach to take. Use your best judgement. Some things here are left intentionally a bit vague! We want to see how you approach these problems.
- Use the internet to your advantage -- we are programmers, we should use the resources available to us! However, do not copy and paste code. Understand the code you are using, and be able to explain it if asked.
- We understand that this is a challenging assignment, and it is okay if you do not complete it. We are more interested in your thought process than the final outcome. That being said, if you finish early, feel free to add additional frontend or backend logic to show off your skills!
- The "best" recommendation is usually the first size returned from the external API, in the `good_matches` array. However, the API also provides some textual information about the recommendation. You could use this information to provide a more human-readable recommendation if you like!

#### Instructions
If you're ready to get started...
- Ensure you have a GitHub account.
- Fork this repository, which should create a copy of this repository under your GitHub account.
- Clone the repository to your local machine.
- Ensure you have Node.js installed as well as NPM.
- Install all dependencies using `npm install`.
- Run `npm run dev` to start the web server
	- the client should run on `localhost:5173` 
	- the server should run on `localhost:3000`
- Initialize an empty git commit using the following command: `git commit --allow-empty -m "Start Timer"`, and commit your code regularly so that we can see your progress in real time. **Your final commit should be no more than 120 minutes after your initial commit.**

Remember -- you may not finish everything, and that is perfectly okay! We are more interested in your progress and thought process than the final outcome.

The tasks, in order of importance, are:
1) Implement the `/profile` creation endpoint
2) Implement the `/recommendation` endpoints
3) Implement the frontend
4) Implement the `/profile` update endpoint
5) Implement the `/profile` retrieval endpoint
6) Any additional optimizations or improvements you can think of!


