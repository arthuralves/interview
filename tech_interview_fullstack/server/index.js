import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { getRecommendation } from './_helpers.js';
import { getProductById, getProducts } from './_fake_db.js';
import storage from 'node-persist';

await storage.init();

const app = express();
app.use(cors());
const port = 3000;

// Middleware
app.use(bodyParser.json());

let profiles = await storage.getItem('profiles');

if (!profiles) {
  profiles = '//TODO: Build your data structure for profile storage here';
}

// GET /profile endpoint
app.get('/profile', (req, res) => {
  res.json('// RETURN VALUE');
});

// POST /profile endpoint
app.post('/profile', (req, res) => {
  // TODO: Implement the logic to create the profile
  storage.setItem('profiles', profiles);
  res.json(' // RETURN VALUE');
});

// PUT /profile endpoint
app.post('/profile', (req, res) => {
  // TODO: Implement the logic to update the profile
  storage.setItem('profiles', profiles);
  res.json(' // RETURN VALUE');
});

app.get('/products', (req, res) => {
  const products = getProducts();
  res.json(products);
});

// GET /recommendation endpoint
app.get('/recommendation', async (req, res) => {

    const getAvailableSizes = ({ productId }) => {
        const product = getProductById(productId);
    
        let sizes = [];
    
        // TODO: Implement the logic to get the unique and in stock available sizes from the product
    
        return sizes;
    }
  // TODO: Implement the logic to get the product id and available sizes, as well as the profile
  
  const recommendation = await getRecommendation({ profile: null, availableSizes: null });
  
  res.json({ recommendation });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
