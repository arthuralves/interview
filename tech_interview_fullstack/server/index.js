import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { getRecommendation } from './_helpers.js';
import { getProductById, getProducts } from './_fake_db.js';
import storage from 'node-persist';
import {v4 as uuidv4} from 'uuid';
import { body,query, validationResult } from 'express-validator';

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
app.get('/profile', async (req, res) => {
    const { profileId } = req.query;

    if (!profileId) {
      return res.status(400).json({ error: 'Missing profile id' });
    }

    const profiles = await storage.getItem('profiles') || [];
    const profile = profiles.find(p => p.id === profileId);

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.json(profile);
});


// POST /profile endpoint
app.post('/profile', [
  body('height').isNumeric({ min: 51.77 }).withMessage('Height must be a number greater than 51.77'),
  body('weight').isNumeric({ min: 96.447334 }).withMessage('Weight must be a number greater than 96.447334'),
  body('age').isInt({ min: 13 }).withMessage('Age must be a positive integer greater than 13'),
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
    profiles.push(newProfile);
    await storage.setItem('profiles', profiles);
    res.status(201).json({ message: 'Profile created', newProfile });
  } catch (error) {
    console.error('Error saving profile1:', error);
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

  const getAvailableSizes = ({ productId }) => {
    const product = getProductById(parseInt(productId, 10));
    if (!product) {
      return null;
    }

    // Extract unique, in-stock sizes
    const sizes = product.variants
      .filter(variant => variant.inStock)
      .map(variant => variant.size.toUpperCase())
      .filter(size => ['XS', 'S', 'M', 'L', 'XL', 'XXL'].includes(size));

    return sizes;
  }

// GET /recommendation endpoint
app.get('/recommendation', [
  query('productId').isInt().withMessage('Product ID must be an integer'),
  query('profileId').isUUID().withMessage('Profile ID must be a valid UUID')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {productId, profileId }   = req.query;

    // Get available sizes from the product
    const availableSizes = getAvailableSizes({ productId });
    if (!availableSizes || availableSizes.length === 0) {
      return res.status(404).json({ error: 'No available sizes found for this product' });
    }

    // Retrieve the profile
    const profile = profiles.find(p => p.id === profileId);
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    try {
      // Call the external recommendation API with profile and available sizes
      const recommendation = await getRecommendation({ profile, availableSizes });
      if (recommendation.error) {
        return res.status(500).json({ error: recommendation.error });
      }

      res.json({ recommendation });
    } catch (error) {
      res.status(500).json({ error: 'Error getting recommendation' });
    }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
