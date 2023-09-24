const { DataTypes } = require('sequelize');
const db = require('../database/db');

const Product = db.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  category: {
    type: DataTypes.ENUM('Men\'s Clothing', 'Jewelry', 'Electronics', 'Women\'s Clothing'),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  rating_rate: {
    type: DataTypes.DECIMAL(3, 1),
    allowNull: true
  },
  rating_count: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  addition_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  discount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue:db.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
  }
}, {
  timestamps: false,
  engine: 'InnoDB',
  charset: 'utf8mb4',
  collate: 'utf8mb4_0900_ai_ci',
});

//Get all products
async function getAllProducts() {
  try {
    const products = await Product.findAll();
   // console.log("\nproducts: \x1b[1m"+products+"\x1b[0m\n");

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('An error occurred while fetching products');
  }
}


// שאילתת SELECT פשוטה לשליפת מידע ממוצר על פי ID
async function getProductById(productId) {
    try {
      const product = await Product.findByPk(productId);
      return product;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw new Error('An error occurred while fetching the product');
    }
  }
  
  // שאילתת DELETE למחיקת מוצר על פי ID
async function deleteProduct(productId) {
    try {
      const product = await Product.findByPk(productId);
      if (product) {
        await product.destroy();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      throw new Error('An error occurred while deleting the product');
    }
  }
  
  // שאילתת COUNT לספירת מספר המוצרים בקטגוריה מסוימת
async function countProductsInCategory(category) {
    try {
      const count = await Product.count({
        where: {
          category: category
        }
      });
      return count;
    } catch (error) {
      console.error('Error counting products:', error);
      throw new Error('An error occurred while counting products');
    }
  }
  
  // שאילתת SELECT לשליפת רשימת קטגוריות ייחודיות
  async function getUniqueCategories() {
    try {
      const categories = await Product.findAll({
        attributes: ['category'], // בוחרים להציג רק את העמודה 'category'
        group: ['category'] // משתמשים ב- GROUP BY כדי לקבל ערכים ייחודיים
      });
  
      const categoryNames = categories.map(category => category.category);
      // console.log(categoryNames);
      return (categoryNames.map((name, index) => ({
        id: index + 1,
        name: name
      })));
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('An error occurred while fetching categories');
    }
  }
  


module.exports = {Product, getUniqueCategories, getAllProducts, getProductById};
