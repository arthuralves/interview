import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { getRecommendation } from './_helpers.js';
import { getProductById, getProducts } from './_fake_db.js';
import storage from 'node-persist';
import {v4 as uuidv4} from 'uuid';
import { body, validationResult } from 'express-validator';

await storage.init();

const app = express();
app.use(cors());
const port = 3000;

// Middleware
app.use(bodyParser.json());

let profiles = await storage.getItem('profiles');

if (!profiles || !Array.isArray(profiles)) {
  profiles = [];
}

// GET /profile endpoint
app.get('/profile', (req, res) => {
  res.json('// RETURN VALUE');
});

// POST /profile endpoint
app.post('/profile', [
  body('height').isNumeric().withMessage('Height must be a number'),
  body('weight').isNumeric().withMessage('Weight must be a number'),
  body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer'),
  body('waist').isNumeric().withMessage('Waist must be a number')
], async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { height, weight, age, waist } = req.body;

  const newProfile = {
    id: uuidv4(),
    height,
    weight,
    age,
    waist
  };

  try {
    await storage.setItem('profiles', profiles);
    res.status(201).json({ message: 'Profile created', newProfile });
  } catch (error) {
    console.error('Error saving profile:', error);
    res.status(500).json({ message: 'Server error, could not save profile' });
  }
});

// PUT /profile endpoint
app.put('/profile', (req, res) => {
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
