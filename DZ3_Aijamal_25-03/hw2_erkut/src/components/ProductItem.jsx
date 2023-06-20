import React, { useState, useEffect } from 'react';
import styles from "./ProductItem.module.css"


function ComponentName() {
  const [placeholderData, setPlaceholderData] = useState([]);
  const [fakestoreData, setFakestoreData] = useState([]);

  

  useEffect(() => {
    
    const fetchPlaceholderData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setPlaceholderData(jsonData);
      } catch (error) {
        console.error('Ошибка при выполнении GET-запроса к jsonplaceholder.typicode.com:', error);
      }
    };

 
    const fetchFakestoreData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        setFakestoreData(jsonData);
      } catch (error) {
        console.error('Ошибка при выполнении GET-запроса к fakestoreapi.com:', error);
      }
    };

    fetchPlaceholderData(); 
    fetchFakestoreData();
  });

  return (
    <div>
      <h2 className={styles.big_text}>Data from jsonplaceholder.typicode.com</h2>
      {placeholderData.map((item) => (
        <div key={item.id}>
          <p>Title: {item.title}</p>
          <p>Body: {item.body}</p>
        </div>

      ))}

      <h2>Data from fakestoreapi.com</h2>
      {fakestoreData.map((item) => (
        <div key={item.id}>
          <p>Title: {item.title}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ComponentName;

