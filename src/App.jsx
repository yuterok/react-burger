import React, { useEffect, useState } from 'react';

import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';


const apiLink = 'https://norma.nomoreparties.space/api/ingredients';

function App() {

  const [ingredientsData, setIngredients] = useState([]);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await fetch(apiLink);
  
        if (!response.ok) {
          throw new Error (response.status);
        }
  
        const data = await response.json();
        setIngredients(data.data);
        console.log('Работает!! Данные: ', data)
      } catch (error) {
        console.error('Ошибка fetch ', error)
      }
    }
  
    fetchData();
  }, [apiLink]
  )

  return (
    <div className="App">
      <AppHeader />
      <div className="container">
        <BurgerIngredients ingredients={ingredientsData}/>
        <BurgerConstructor ingredients={ingredientsData}/>
      </div>
    </div>
  );
}

export default App;
