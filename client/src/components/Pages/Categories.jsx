import React, { useState, useEffect } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);
 useEffect(() => {
    fetch('http://localhost:3500/api/categories') // אנכה את ה-URL המתאים למסלול השרת שמחזיר את רשימת הקטגוריות
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);


  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
