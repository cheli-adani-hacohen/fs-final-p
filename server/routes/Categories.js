const express = require("express");
const router = express.Router();
const db = require('../database/db');
const Product = require('../moduls/Product');


//GET list of product's categories
router.get('/', async (req, res) => {
  try {
    const categories = await Product.getUniqueCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// GET products by category
router.get('/categories/:category', async (req, res) => {
  const category = req.params.category;

  try {
    const products = await Product.findAll({
      where: {
        category: category
      }
    });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
