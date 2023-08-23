// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import AppRouter from './AppRouter';
import AppMenu from './AppMenu';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [userId, setUserId] = useState(null);
  const [logoutChange, setLogoutChange] = useState(null);

  useEffect(() => {
    // קריאה לשרת בהתחלה
    fetchAndStoreProducts();

    // פונקציה שתופעל בעת יציאה מהעמוד
    return () => {
      // מחיקת המידע מה-LocalStorage
      localStorage.removeItem('products');
    };
  }, []);  
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsConnected(true);
      setUserId(user.id);
    } else {
      setIsConnected(false);
      setUserId(null);
    }
  }, [logoutChange]);


  const handleLogout = () => {
    localStorage.removeItem('user');
    setLogoutChange('logout');
  };

  const handleLogin = (user) => {
   // JSON.stringify(user)
    setLogoutChange('login');
  };


  return (
     <div style={{ display: 'flex', flexDirection: 'column'}}>
     <CssBaseline />
     <Router>
       <AppMenu userId={userId} handleLogout={handleLogout} />
       <div style={{ flex: '1 0 auto' }}>
         <Container maxWidth="md" style={{ padding: 0, margin: 0 }}>
           <AppRouter userId={userId} handleLogin={handleLogin} />
         </Container>
       </div>
     </Router>
   </div>
  );
}

export default App;

function fetchAndStoreProducts() {
  fetch('http://localhost:3500/api/products')
    .then(response => response.json())
    .then(products => {
      // אחסון המוצרים ב-LocalStorage
      localStorage.setItem('products', JSON.stringify(products));
      console.log('מוצרים נשמרו ב-LocalStorage:', products);
    })
    .catch(error => {
      console.error('שגיאה בקבלת המוצרים:', error);
    });
}
