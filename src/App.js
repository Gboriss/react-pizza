import React from 'react'
import { Header, Categories } from './components';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories 
        items={[
          "Мясные",
          "Вегетарианские",
          "Гриль",
          "Острые",
          "Закрытые",
        ]}
        onClick={(name)=> console.log(name)}
      />
    </div>
  );
}

export default App;
