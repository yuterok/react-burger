import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';



function App() {

  return (
    <div className="App">
      <AppHeader />
      <div className="container">
        <BurgerIngredients />
      </div>
    </div>
  );
}

export default App;
